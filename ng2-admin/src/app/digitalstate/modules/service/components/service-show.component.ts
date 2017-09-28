import { Component, Injector } from '@angular/core';

import Tabs from '../../../../shared/components/tabs'

import { DsBaseEntityShowComponent } from '../../../components/base-entity-show.component';
import { MicroserviceConfig } from '../../../../shared/providers/microservice.provider';
import { EntityApiService } from '../entity-api.service';
import { ListQuery } from '../../../models/api-query';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Link } from '../../../models/link';

@Component({
    selector: 'ds-service-show',
    templateUrl: '../templates/service-show.template.html',
    styleUrls: ['../styles/service-show.scss'],
})
export class DsServiceShowComponent extends DsBaseEntityShowComponent {

    entityUrlPrefix = 'services';
    headerTitle = 'Service Details';
    scenarios: Array<any> = [];
    loadingScenarios: boolean;

    scenariosTabs: Tabs;

    constructor(injector: Injector,
                microserviceConfig: MicroserviceConfig,
                entityApiService: EntityApiService) {

        super(injector, microserviceConfig);
        this.entityApiService = entityApiService;
    }

    ngOnInit() {
        super.ngOnInit();
        this.backLink = new Link(['/pages/services'], 'general.menu.serviceDirectory');
    }

    ngOnDestroy() {
        if (this.scenariosTabs) {
            this.scenariosTabs.destroy();
        }
    }

    protected prepareEntity(): Observable<{ entity: any, 'entityParent'?: any}> {
        return super.prepareEntity().flatMap(preparedObject => { // success
            this.loadScenarios();
            return Observable.of({'entity': preparedObject.entity, 'entityParent': preparedObject.entityParent});
        });
    }


    protected updateTranslations(lang: string): void {
        super.updateTranslations(lang);

        if (this.entity) {
            this.loadScenarios();
        }
    }

    protected loadScenarios() {
        this.loadingScenarios = true;

        let requestParams = {
            'service.uuid': this.entity.uuid,
            'order[weight]': 'asc'
        };

        this.entityApiService.resource('scenarios').getList(requestParams).subscribe(scenariosData => {
            this.scenarios = [];
            scenariosData.forEach((scenario) => {
                this.scenarios.push(scenario);
            });
        }, () => { // error

        }, () => { // complete
            this.loadingScenarios = false;

            // Transform scenarios markup into tabs
            setTimeout(() => {
                this.scenariosTabs = new Tabs($('#scenarios-tabs'));
            }, 0);
        });
    }
}
