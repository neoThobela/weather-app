/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-weatherSearch',
  templateUrl: './weatherSearch.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class weatherSearchComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_xNwGiHNyafLkBV3P(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xNwGiHNyafLkBV3P(bh) {
    try {
      bh = this.sd_UfBKArTG534lGaY5(bh);
      //appendnew_next_sd_xNwGiHNyafLkBV3P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xNwGiHNyafLkBV3P');
    }
  }

  updateLog(logobject: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { logobject: logobject };
      bh.local = {};
      bh = this.sd_DAIoce5zLSHz5ddG(bh);
      //appendnew_next_updateLog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xh4b1nYV23Kq58VV');
    }
  }

  processWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = {};
      bh = this.sd_5XefC27TcJLNN97U(bh);
      //appendnew_next_processWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sCiN1CN3svsBEZ1D');
    }
  }

  getWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = { ssdWeatherApiUrl: undefined };
      bh = this.cityNameNullCheck(bh);
      //appendnew_next_getWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_977Cgt85QqVA7Wfw');
    }
  }

  //appendnew_flow_weatherSearchComponent_start

  sd_UfBKArTG534lGaY5(bh) {
    try {
      this.page.searchString = undefined;
      this.page.logArray = [];
      //appendnew_next_sd_UfBKArTG534lGaY5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UfBKArTG534lGaY5');
    }
  }

  sd_DAIoce5zLSHz5ddG(bh) {
    try {
      const page = this.page;
      page.logArray.push(bh.input.logobject);
      //appendnew_next_sd_DAIoce5zLSHz5ddG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DAIoce5zLSHz5ddG');
    }
  }

  sd_5XefC27TcJLNN97U(bh) {
    try {
      const page = this.page;
      this.page.showCard =
        typeof this.page.weatherdata === 'object' &&
        Object.keys(this.page.weatherdata).length > 2;
      bh = this.sd_6zu2iXkXPQvaHbrZ(bh);
      //appendnew_next_sd_5XefC27TcJLNN97U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5XefC27TcJLNN97U');
    }
  }

  async sd_6zu2iXkXPQvaHbrZ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          this.page.showCard,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.errorLog(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_L0vPcL5rdfWT9Cup(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6zu2iXkXPQvaHbrZ');
    }
  }

  errorLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.input.errorlog);

      //appendnew_next_errorLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YmqVYIm2jjmNovPa');
    }
  }

  sd_L0vPcL5rdfWT9Cup(bh) {
    try {
      const page = this.page;
      localStorage.lastCity = bh.input.cityName;
      bh.input.successlog = {
        type: 'info',
        message:
          'Successfully Retrieved the Weather Data for city: ' +
          bh.input.cityName,
      };
      bh = this.successLog(bh);
      //appendnew_next_sd_L0vPcL5rdfWT9Cup
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L0vPcL5rdfWT9Cup');
    }
  }

  successLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.input.successlog);

      //appendnew_next_successLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fJxkIkFMVrVTnu0c');
    }
  }

  sd_nbURRVTX8GMZOqho(bh) {
    try {
      const page = this.page;
      bh.input.errorlog = {
        type: 'error',
        message: `Weather Data Not Found${
          bh.input.cityName ? ` For the City: ${bh.input.cityName}` : ''
        }!`,
      };
      bh = this.errorLog(bh);
      //appendnew_next_sd_nbURRVTX8GMZOqho
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nbURRVTX8GMZOqho');
    }
  }

  cityNameNullCheck(bh) {
    try {
      if (
        this.sdService.operators['null'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['empty'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'string',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_anK2pfdCHjOwPWY5(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TjEw88jJOczyeNbn');
    }
  }

  snackbar(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('invalid city name', 'okay', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_snackbar
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RI5o17lGxe6dydpr');
    }
  }

  sd_anK2pfdCHjOwPWY5(bh) {
    try {
      const page = this.page;
      bh.local.ssdWeatherApiUrl = `${bh.system.environment.properties.ssdURL}weather`;
      bh.local.qparams = {
        cityName: bh.input.cityName,
      };
      bh = this.callServerName(bh);
      //appendnew_next_sd_anK2pfdCHjOwPWY5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_anK2pfdCHjOwPWY5');
    }
  }

  async callServerName(bh) {
    try {
      let requestOptions = {
        url: bh.local.ssWeatherApiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.weatherdata = await this.sdService.nHttpRequest(requestOptions);
      this.sd_0Dk9eWjJYHfZVlU7(bh);
      bh = this.callProcessWeather(bh);
      //appendnew_next_callServerName
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jRgr5qrInLcItWEs');
    }
  }

  sd_0Dk9eWjJYHfZVlU7(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.ssdWeatherApiUrl);
      //appendnew_next_sd_0Dk9eWjJYHfZVlU7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Dk9eWjJYHfZVlU7');
    }
  }

  callProcessWeather(bh) {
    try {
      let outputVariables = this.processWeather(bh.input.cityName);

      //appendnew_next_callProcessWeather
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LHrXW4HN7nDeB7kO');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_FKBYSj2BtrrHr3yB(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_FKBYSj2BtrrHr3yB(bh) {
    const nodes = [];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_nbURRVTX8GMZOqho(bh);
      //appendnew_next_sd_FKBYSj2BtrrHr3yB
      return true;
    }
    return false;
  }
  //appendnew_flow_weatherSearchComponent_Catch
}
