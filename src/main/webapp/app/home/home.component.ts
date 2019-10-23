import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, Principal, Account } from 'app/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    account: Account;
    modalRef: NgbModalRef;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private elementRef: ElementRef,
        private renderer2: Renderer2) { }

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#808080';
        this.elementRef.nativeElement.ownerDocument.querySelector('.jh-card').style.padding = '0';
    }

    ngOnDestroy() {
        this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.body, 'style');
        this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.querySelector('.jh-card'), 'style');
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
