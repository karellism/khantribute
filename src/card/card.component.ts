import { Component, ChangeDetectorRef } from "@angular/core";
import { TranslationService } from "../services/translation.service";
import {parseString, toHTML} from "./parser";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

enum PanType {
    HORIZONTAL = 2,
    VERTICAL = 1,
    NONE = 0
}

enum Action {
    APPROVE = 1,
    SKIP = 3,
    REJECT = -1,
    NONE = 0,
    RESET = 2
}

@Component({
    selector: "card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"],
    providers: [
        TranslationService
    ]
})
export class CardComponent {
    public panType: PanType = PanType.NONE;
    private scrollX: number = 0;
    private scrollY: number = 0;
    private lastEnd: number = -Infinity;
    action: Action = Action.NONE;

    constructor(public translationService: TranslationService, private sanitizer: DomSanitizer, private changeDetector: ChangeDetectorRef) {
        this.translationService.onSubmit(this.handleSubmit.bind(this));
    }
    getTranslationHTML(): SafeHtml {
        if (this.translationService.stringsLeft() > 0) {
            try {
                return this.sanitizer.bypassSecurityTrustHtml(toHTML(parseString(this.translationService.currentString().target)));
            } catch {
                // Stop parser errors from ruining UX by just going to the next string that doesn't throw an error
                console.error(`Error parsing translation string ${this.translationService.currentString().id}`);
                this.translationService.advance();
                return this.sanitizer.bypassSecurityTrustHtml("");
            }
        } else return this.sanitizer.bypassSecurityTrustHtml("");
    }
    getOriginalHTML(): SafeHtml {
        if (this.translationService.stringsLeft() > 0) {
            try {
                return this.sanitizer.bypassSecurityTrustHtml(toHTML(parseString(this.translationService.currentString().source)));
            } catch {
                // Stop parser errors from ruining UX by just going to the next string that doesn't throw an error
                console.error(`Error parsing original string ${this.translationService.currentString().id}`);
                this.translationService.advance();
                return this.sanitizer.bypassSecurityTrustHtml("");
            }
        } else return this.sanitizer.bypassSecurityTrustHtml("");
    }
    getNextTranslationHTML(): SafeHtml {
        if (this.translationService.stringsLeft() > 1) {
            try {
                return this.sanitizer.bypassSecurityTrustHtml(toHTML(parseString(this.translationService.nextString().target)));
            } catch {
                console.error(`Error parsing translation string ${this.translationService.nextString().id}`);
                return this.sanitizer.bypassSecurityTrustHtml("");
            }
        } else return this.sanitizer.bypassSecurityTrustHtml("");
    }
    getNextOriginalHTML(): SafeHtml {
        if (this.translationService.stringsLeft() > 1) {
            try {
                return this.sanitizer.bypassSecurityTrustHtml(toHTML(parseString(this.translationService.nextString().source)));
            } catch {
                console.error(`Error parsing original string ${this.translationService.nextString().id}`);
                return this.sanitizer.bypassSecurityTrustHtml("");
            }
        } else return this.sanitizer.bypassSecurityTrustHtml("");
    }
    onPanStart(evt) {
        evt.preventDefault();
        this.panType = PanType.NONE;
        this.scrollX = 0;
    }
    onPanEnd(evt) {
        evt.preventDefault();
        if (this.scrollX <= -window.innerWidth / 4) {
            this.translationService.rejectString();
        } else if (this.scrollX >= window.innerWidth / 4) {
            this.translationService.approveString();
        }
        this.panType = PanType.NONE;
        this.scrollX = 0;
        this.lastEnd = evt.timeStamp;
    }
    handleSubmit(score) {
        if (score > 0) this.action = Action.APPROVE;
        else if (score < 0) this.action = Action.REJECT;
        else this.action = Action.SKIP;
        setTimeout(() => {
            this.action = Action.RESET;
            this.translationService.advance();
            setTimeout(() => this.action = Action.NONE, 500);
        }, 500);
    }
    onPan(evt) {
        if (evt.timeStamp < this.lastEnd + 500) {
            return;
        }

        if (this.panType === PanType.NONE) {
            if (Math.abs(evt.deltaX) < Math.abs(evt.deltaY)) {
                this.panType = PanType.VERTICAL;
            } else {
                this.panType = PanType.HORIZONTAL;
            }
        }
        
        if (this.panType === PanType.VERTICAL) {
            // TODO This is awful but it was the only way I could think of
            window.scrollBy(0, -evt.velocityY * 70);
        } else if (this.panType === PanType.HORIZONTAL) {
            this.scrollX = evt.deltaX;
        }
    }
    getScrollX() {
        return this.scrollX;
    }
    getFeedbackWidth(action) {
        if (action == "approve" && this.scrollX > 0) return this.scrollX;
        if (action == "reject" && this.scrollX < 0) return -this.scrollX;
        return 0;
    }
    getScrollY() {
        return this.scrollY;
    }
}