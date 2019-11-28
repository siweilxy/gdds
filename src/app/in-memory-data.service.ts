import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ApInfo } from './apinfo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const apinfos = [
      { ap_id_cd: "siwei", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "2", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "3", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "4", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "5", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "6", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "7", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "8", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "9", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "10", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "11", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_receive_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"}
    ];
    return {apinfos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(apinfos: ApInfo[]): number {
    return 11;
  }
}