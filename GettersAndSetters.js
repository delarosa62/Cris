/// <reference types="Cypress"/>

class AA1_Getters_Setters {

    aa1_url = Cypress.env('aa1_url')
    aa1_gateway_url = Cypress.env('aa1_gateway_url')

    api_ntt_program_config_url = Cypress.env('api_ntt_program_config_url')
    api_ntt_program_evaluate_url = Cypress.env('api_ntt_program_evaluate_url')
    api_ntt_program_optimization_url = Cypress.env('api_ntt_program_optimization_url')
    api_ntt_program_optimize_url = Cypress.env('api_ntt_program_optimize_url')
    api_ntt_program_products_url = Cypress.env('api_ntt_program_products_url')

    api_ntt_program_persistence_copays_url = Cypress.env('api_ntt_program_persistence_copays_url')
    api_ntt_program_persistence_rate_plot_url = Cypress.env('api_ntt_program_persistence_rate_plot_url')
    api_ntt_program_copay_card_plot_url = Cypress.env('api_ntt_program_copay_card_plot_url')
    api_ntt_program_abandonment_rate_plot_url = Cypress.env('api_ntt_program_abandonment_rate_plot_url')
    api_ntt_program_adherence_plot_url = Cypress.env('api_ntt_program_adherence_plot_url')
    api_ntt_program_optimization_plot_url = Cypress.env('api_ntt_program_optimization_plot_url')

    api_user_url = Cypress.env('api_user_url')
    api_test_time_url = Cypress.env('api_test_time_url')
    api_state_program_url = Cypress.env('api_state_program_url')

    api_cpp_config_url = Cypress.env('api_cpp_config_url')
    api_cp_generate_report_url = Cypress.env('api_cp_generate_report_url')
    api_cp_products_url = Cypress.env('api_cp_products_url')
    api_cp_run_program_url = Cypress.env('api_cp_run_program_url')
    api_cp_patient_header_url = Cypress.env('api_cp_patient_header_url')

    api_mp_evaluate_url = Cypress.env('api_mp_evaluate_url')
    api_mp_generate_report_url = Cypress.env('api_mp_generate_report_url')

    val_url = Cypress.env('val_url')
    val_test_time_url = Cypress.env('val_test_time_url')
    val_cohorts_url = Cypress.env('val_cohorts_url')
    val_cohorts_Id_url = Cypress.env('val_cohorts_Id_url')
    val_members_url = Cypress.env('val_members_url')
    val_members_agegender_url = Cypress.env('val_members_agegender_url')
    val_members_guideline_url = Cypress.env('val_members_guideline_url')

    val_amplify_url = Cypress.env('val_amplify_url')

    val_token_cohorts_url = Cypress.env('val_token_cohorts_url')
    val_token_single_cohort_url = Cypress.env('val_token_single_cohort_url')
    val_token_members_cohort_url = Cypress.env('val_token_members_cohort_url')
    val_token_members_agegenderdist_cohort_url = Cypress.env('val_token_members_agegenderdist_cohort_url')
    val_token_members_guidelinetrea_cohort_url = Cypress.env('val_token_members_guidelinetrea_cohort_url')
    val_token_precheck_cohort_url = Cypress.env('val_token_precheck_cohort_url')
    val_token_fnstatus_cohort_url = Cypress.env('val_token_fnstatus_cohort_url')

    cohortsId = Cypress.env('cohortsId')

    api_post_method = Cypress.env('api_post_method')
    api_get_method = Cypress.env('api_get_method')
    api_default_property = Cypress.env('api_default_property')
    api_config_property = Cypress.env('api_config_property')
    api_user_property = Cypress.env('api_user_property')
    api_pers_copay_property = Cypress.env('api_pers_copay_property')
    api_states_property = Cypress.env('api_states_property')
    api_headers_property = Cypress.env('api_headers_property')

    val_api_total_members_property = Cypress.env('val_api_total_members_property')

    val_token_api_cohorts_property = Cypress.env('val_token_api_cohorts_property')
    val_token_api_single_cohort_property = Cypress.env('val_token_api_single_cohort_property')
    val_token_api_members_cohort_property = Cypress.env('val_token_api_members_cohort_property')
    val_token_api_members_agegenderdist_property = Cypress.env('val_token_api_members_agegenderdist_property')
    val_token_api_precheck_cohort_property = Cypress.env('val_token_api_precheck_cohort_property')

    api_expected_response = Cypress.env('api_expected_response')
    
    page_title = Cypress.env('page_title')

    login_page_button = Cypress.env('login_page_button')
    aa1_login_button = Cypress.env('aa1_login_button')
    evaluate_button = Cypress.env('evaluate_button')

    add_button = Cypress.env('add_button')
    reset_button = Cypress.env('reset_button')  
    delete_link = Cypress.env('delete_link')

    default_product= Cypress.env('default_product')
    main_product = Cypress.env('main_product')
    default_dos = Cypress.env('default_dos')
    
    product_drop_down_id = Cypress.env('product_drop_down_id')

    dos_drop_down_id = Cypress.env('dos_drop_down_id')
    aa1_userId = Cypress.env('aa1_userId')

    aa1_valid_passwd = Cypress.env('aa1_valid_passwd')
    aa1_invalid_passwd = Cypress.env('aa1_invalid_passwd')
    aa1_user_field_id = Cypress.env('aa1_user_field_id')
    aa1_passwd_field_id = Cypress.env('aa1_passwd_field_id')

    optimization_objective = Cypress.env('optimization_objective')
    optimization_extent = Cypress.env('optimization_extent')

    scenario_tmp = Cypress.env('scenario_tmp')
    list_of_values_tmp = Cypress.env('list_of_values_tmp')
    id_scen_string = Cypress.env('id_scen_string')
    input_tmp = Cypress.env('input_tmp')

    max_number_of_scenarios = Cypress.env('max_number_of_scenarios')
    min_number_of_scenarios = Cypress.env('min_number_of_scenarios')
    max_number_of_params = Cypress.env('max_number_of_params')
    min_number_of_params = Cypress.env('min_number_of_params')

    scen1 = Cypress.env('scen1')
    scen2 = Cypress.env('scen2')
    scen3 = Cypress.env('scen3')
    scen4 = Cypress.env('scen4')
    scen5 = Cypress.env('scen5')
    scen6 = Cypress.env('scen6')

    scenario1_list_of_values = Cypress.env('scenario1_list_of_values')
    scenario2_list_of_values = Cypress.env('scenario2_list_of_values')
    scenario3_list_of_values = Cypress.env('scenario3_list_of_values')
    scenario4_list_of_values = Cypress.env('scenario4_list_of_values')
    scenario5_list_of_values = Cypress.env('scenario5_list_of_values')
    scenario6_list_of_values = Cypress.env('scenario6_list_of_values')

    TC1_DESC = Cypress.env('TC1_DESC')
    TC1_STEP1_DESC = Cypress.env('TC1_STEP1_DESC')
    TC1_STEP2_DESC = Cypress.env('TC1_STEP2_DESC')
    TC1_STEP3_DESC = Cypress.env('TC1_STEP3_DESC')
    TC1_STEP4_DESC = Cypress.env('TC1_STEP4_DESC')
    
    TC2_DESC = Cypress.env('TC2_DESC')
    TC2_STEP1_DESC = Cypress.env('TC2_STEP1_DESC')
    TC2_STEP2_DESC = Cypress.env('TC2_STEP2_DESC')

    TC3_DESC = Cypress.env('TC3_DESC')
    TC3_STEP1_DESC = Cypress.env('TC3_STEP1_DESC')
    TC3_STEP2_DESC = Cypress.env('TC3_STEP2_DESC')
    TC3_STEP3_DESC = Cypress.env('TC3_STEP3_DESC')
    TC3_STEP4_DESC = Cypress.env('TC3_STEP4_DESC')
    TC3_STEP5_DESC = Cypress.env('TC3_STEP5_DESC')
    TC3_STEP6_DESC = Cypress.env('TC3_STEP6_DESC')

    TC4_DESC = Cypress.env('TC4_DESC')
    TC4_STEP1_DESC = Cypress.env('TC4_STEP1_DESC')
    TC4_STEP2_DESC = Cypress.env('TC4_STEP2_DESC')

    TC5_DESC = Cypress.env('TC5_DESC')
    TC5_STEP1_DESC = Cypress.env('TC5_STEP1_DESC')
    TC5_STEP2_DESC = Cypress.env('TC5_STEP2_DESC')
    TC5_STEP3_DESC = Cypress.env('TC5_STEP3_DESC')

    TC6_DESC = Cypress.env('TC6_DESC')
    TC6_STEP1_DESC = Cypress.env('TC6_STEP1_DESC')

    TC7_DESC = Cypress.env('TC7_DESC')
    TC7_STEP1_DESC = Cypress.env('TC7_STEP1_DESC')

    TC8_DESC = Cypress.env('TC8_DESC')
    TC8_STEP1_DESC = Cypress.env('TC8_STEP1_DESC')

    TC9_DESC = Cypress.env('TC9_DESC')
    TC9_STEP1_DESC = Cypress.env('TC9_STEP1_DESC')
    TC9_STEP2_DESC = Cypress.env('TC9_STEP2_DESC')

    TC10_DESC = Cypress.env('TC10_DESC')
    TC10_STEP1_DESC = Cypress.env('TC10_STEP1_DESC')
    TC10_STEP2_DESC = Cypress.env('TC10_STEP2_DESC')

    TC11_DESC = Cypress.env('TC11_DESC')
    TC11_STEP1_DESC = Cypress.env('TC11_STEP1_DESC')

    TC12_DESC = Cypress.env('TC12_DESC')
    TC12_STEP1_DESC = Cypress.env('TC12_STEP1_DESC')
    TC12_STEP2_DESC = Cypress.env('TC12_STEP2_DESC')

    TC13_DESC = Cypress.env('TC13_DESC')
    TC13_STEP1_DESC = Cypress.env('TC13_STEP1_DESC')

    TC14_DESC = Cypress.env('TC14_DESC')
    TC14_STEP1_DESC = Cypress.env('TC14_STEP1_DESC')

    TC15_DESC = Cypress.env('TC15_DESC')
    TC15_STEP1_DESC = Cypress.env('TC15_STEP1_DESC')

    TC16_DESC = Cypress.env('TC16_DESC')
    TC16_STEP1_DESC = Cypress.env('TC16_STEP1_DESC')

    TC17_DESC = Cypress.env('TC17_DESC')
    TC17_STEP1_DESC = Cypress.env('TC17_STEP1_DESC')

    TC18_DESC = Cypress.env('TC18_DESC')
    TC18_STEP1_DESC = Cypress.env('TC18_STEP1_DESC')

    monthly_table = Cypress.env('monthly_table')
    annual_table = Cypress.env('annual_table')
    annual_table_2 = Cypress.env('annual_table_2')

    monthly_data_source_file = Cypress.env('monthly_data_source_file')
    annual_data_source_file = Cypress.env('annual_data_source_file')
    annual_2_data_source_file = Cypress.env('annual_2_data_source_file')

    dummy_msg = Cypress.env('dummy_msg')
    dashboard_msg = Cypress.env('dashboard_msg')
    failure_log_msg = Cypress.env('failure_log_msg')
    pass_log_msg = Cypress.env('pass_log_msg')
    invalid_credentials_error_msg = Cypress.env('invalid_credentials_error_msg')
    valid_credentials_msg = Cypress.env('valid_credentials_msg')

    sso_data_log = Cypress.env('sso_data_log')
    
}

export default AA1_Getters_Setters