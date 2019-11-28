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

    const pubcfgs = [
      {pub_id_cd:"1",ap_sid:"2",ap_tp:"3",task_limit:"4",task_push_gap:"5",sjso_path:"6",get_tm_md:"7",get_data_md:"8",min_adjust_tm:"9",task_time_slice:"10",sec_adjust_tm:"11",sec_dispach_gap:'12',zip_in:"13",enc_in:"14",max_rec_num:"15",stat_in:"16",sid_desc:"17",resv_fld:"18",oper_in:"19",event_id:"20",rec_id:"21",rec_upd_usr_id:"22",rec_upd_ts:"23",rec_crt_ts:"24"}
    ];

    return {apinfos,pubcfgs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(apinfos: ApInfo[]): number {
  //   return 11;
  // }
}