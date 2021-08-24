import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Oreo } from "@oreo-app/api-interfaces";
import { NotificationsService, OreosService } from "@oreo-app/core-data";
import { take, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class OreoFacade {
    private _allOreosSource$ = new BehaviorSubject<Oreo[]>([]);
    allOreos$: Observable<Oreo[]> = this._allOreosSource$.asObservable();

    private _selectedOreoSource$ = new BehaviorSubject<Oreo>({} as Oreo);
    selectedOreo$: Observable<Oreo> =
    this._selectedOreoSource$.asObservable();

    constructor(
        private oreosService: OreosService,
        private notificationService: NotificationsService
    ) {}

    loadOreos() {
        this.oreosService
            .all()
            .pipe(
                tap((oreos) => this._allOreosSource$.next(oreos)),
                take(1)
            )
            .subscribe();
    };

    selectOreo(oreoId: string) {
        this.oreosService
            .find(oreoId)
            .pipe(
                tap((oreo) => this._selectedOreoSource$.next(oreo)),
            )
            .subscribe();
    }

    saveOreo(oreo: Oreo) {
        oreo.id ? this.updateOreo(oreo) : this.createOreo(oreo);
    };
    
    createOreo(oreo: Oreo) {
        this.oreosService
            .create(oreo)
            .pipe(
                tap(() => {
                    this.loadOreos();
                    this.notificationService.notify('Oreo Successfully Created')
                }),
                take(1)
            )
            .subscribe();        
    };

    updateOreo(oreo: Oreo) {
        this.oreosService
            .update(oreo)
            .pipe(
                tap(() => {
                    this.loadOreos();
                    this.notificationService.notify('Oreo Successfully Updated')
                }),
                take(1)
            )
            .subscribe();
    };

    deleteOreo(oreoId: string) {
        this.oreosService
            .delete(oreoId)
            .pipe(
                tap(() => {
                    this.loadOreos();
                    this.notificationService.notify('Oreo Successfully Deleted')
                }),
                take(1)
            )
            .subscribe();
    }
}