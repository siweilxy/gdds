import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const apinfos = [
      { ap_id_cd: "siwei", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "2", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "3", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "4", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "5", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "6", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "7", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "8", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "9", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "10", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"},
      { ap_id_cd: "11", ap_st:"1",ap_priv_bmp:"1",ap_vfy_md:"1",ap_vfy_alg:"1",ap_vfy_key:"1",sys_id:"1",clt_tp:"1",tfr_md:"1",idle_chk_tm:"1",idle_snd_tm:"1",db_in:"1",db_name:"1",db_connect_time_out:"1",db_recieve_time_out:"1",data_num:"1",reformat_in:"1",clt_module:"1",clt_version:"1",platform:"1",deploy:"1",lia_officer:"1",oper_team:"1",ap_desc:"1",oper_in:"1",event_id:"1",rec_id:"1",rec_upd_usr_id:"1",rec_crt_ts:"1",rec_upd_ts:"1"}
    ];

    const pubcfgs = [
      {pub_id_cd:"1",ap_sid:"2",ap_tp:"3",task_limit:"4",task_push_gap:"5",sjso_path:"6",get_tm_md:"7",get_data_md:"8",min_adjust_tm:"9",task_time_slice:"10",sec_adjust_tm:"11",sec_dispach_gap:'12',zip_in:"13",enc_in:"14",max_rec_num:"15",stat_in:"16",sid_desc:"17",resv_fld:"18",oper_in:"19",event_id:"20",rec_id:"21",rec_upd_usr_id:"22",rec_upd_ts:"23",rec_crt_ts:"24"}
    ];

    const subcfgs = [      
      {sub_id_cd:"1",ap_sid:"2",ap_tp:"3",rcv_limit:"4",updso_path:"5",dat_buf_num:"6",dat_buf_saf:"7",proc_mode:"8",get_tm_in:"9",no_found_md:"10",rsp_in:"11",zip_in:"12",enc_in:"13",max_rec_num:"14",stat_in:"15",sid_desc:"16",resv_fld:"17",oper_in:"18",event_id:"19",rec_id:"20",rec_upd_usr_id:"21",rec_upd_ts:"22",rec_crt_ts:"23"}
  ];

  const pubinfos = [
    {data_index:"1",data_tp:"2",pub_id_cd:"3",gourp_id:"4",shm_key:"5",sem_key:"6",seg_num:"7",upd_num:"8",rec_num:"9",rec_len:"10",zip_in:"11",enc_in:"12",data_desc:"13",to_tm:"14",resv_fld:"15",oper_in:"16",event_id:"17",rec_id:"18",rec_upd_usr_id:"19",rec_upd_ts:"20",rec_crt_ts:"21"}
  ];

  const subinfos=[
    {task_index:"1",data_index:"2",sub_id_cd:"3",gourp_id:"4",sub_seq:"5",sub_conum:"6",consist_in:"7",fall_in:"8",conv_in:"9",conv_id:"10",filter_in:"11",filter_id:"12",zip_in:"13",enc_in:"14",data_enc_md:"15",data_enc_key:"16",rec_len:"17",bat_num:"18",to_tm:"19",task_desc:"20",resv_fld:"21",oper_in:"22",event_id:"23",rec_id:"24",rec_upd_usr_id:"25",rec_upd_ts:"26",rec_crt_ts:"27"}
  ];

  const linecfgs=[
    {line_no:"1",session_id:"2",cgwsvr_id:"3",svc_nm:"4",ap_id_cd:"5",ap_sid:"6",line_tp:"7",line_st:"8",log_switch_in:"9",host_id:"10",local_ip_addr:"11",local_port_no:"12",remote_ip_addr:"13",remote_port_no:"14",max_tps:"15",comm_snd_buf_size:"16",sync_in:"17",oper_in:"18",event_id:"19",rec_id:"20",rec_upd_usr_id:"21",rec_upd_ts:"22",rec_crt_ts:23}
  ];

  const pubts=[
    {data_index:"1",pub_id_cd:"2",data_tp:"3",allow_time:"4",mon_in:"5",data_desc:"6",pub_fin_ts:"7",rec_upd_ts:"8",rec_crt_ts:"9"}
  ];

  const subts=[
    {task_index:"1",host_id:"2",sub_id_cd:"3",data_index:"4",host_st:"5",allow_time:"6",mon_in:"7",data_desc:"8",sub_fin_ts:"9",oper_in:"10",event_id:"11",rec_id:"12",rec_upd_usr_id:"13",rec_upd_ts:"14",rec_crt_ts:"15"}
  ];

    return {apinfos,pubcfgs,subcfgs,pubinfos,subinfos,linecfgs,pubts,subts};
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