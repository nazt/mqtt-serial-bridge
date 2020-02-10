// just the definitions for cctalk headers
let CMD = {};
// just the definitions for cctalk headers
CMD.reset_device = 1;
CMD.request_comms_status_variables = 2;
CMD.clear_comms_status_variables = 3;
CMD.request_comms_revision = 4;
CMD.request_service_status = 104;
CMD.data_stream = 105;
CMD.request_escrow_status = 106;
CMD.operate_escrow = 107;
CMD.request_encrypted_monetary_id = 108;
CMD.request_encrypted_hopper_status = 109;
CMD.switch_encryption_key = 110;
CMD.request_encryption_support = 111;
CMD.read_encrypted_events = 112;
CMD.switch_baud_rate = 113;
CMD.request_USB_id = 114;
CMD.request_real_time_clock = 115;
CMD.modify_real_time_clock = 116;
CMD.request_cashbox_value = 117;
CMD.modify_cashbox_value = 118;
CMD.request_hopper_balance = 119;
CMD.modify_hopper_balance = 120;
CMD.purge_hopper = 121;
CMD.request_error_status = 122;
CMD.request_activity_register = 123;
CMD.verify_money_out = 124;
CMD.pay_money_out = 125;
CMD.clear_money_counter = 126;
CMD.request_money_out = 127;
CMD.request_money_in = 128;
CMD.read_barcode_data = 129;
CMD.request_indexed_hopper_dispense_count = 130;
CMD.request_hopper_coin_value = 131;
CMD.emergency_stop_value = 132;
CMD.request_hopper_polling_value = 133;
CMD.dispense_hopper_value = 134;
CMD.set_accept_limit = 135;
CMD.store_encryption_code = 136;
CMD.switch_encryption_code = 137;
CMD.finish_firmware_upgrade = 138;
CMD.begin_firmware_upgrade = 139;
CMD.upload_firmware = 140;
CMD.request_firmware_upgrade_capability = 141;
CMD.finish_bill_table_upgrade = 142;
CMD.begin_bill_table_upgrade = 143;
CMD.upload_bill_tables = 144;
CMD.request_currency_revision = 145;
CMD.operate_bidirectional_motors = 146;
CMD.perform_stacker_cycle = 147;
CMD.read_opto_voltages = 148;
CMD.request_individual_error_counter = 149;
CMD.request_individual_accept_counter = 150;
CMD.test_lamps = 151;
CMD.request_bill_operating_mode = 152;
CMD.modify_bill_operating_mode = 153;
CMD.route_bill = 154;
CMD.request_bill_position = 155;
CMD.request_country_scaling_factor = 156;
CMD.request_bill_id = 157;
CMD.modify_bill_id = 158;
CMD.read_buffered_bill_events = 159;
CMD.request_cipher_key = 160;
CMD.pump_rng = 161;
CMD.modify_inhibit_and_override_registers = 162;
CMD.test_hopper = 163;
CMD.enable_hopper = 164;
CMD.modify_variable_set = 165;
CMD.request_hopper_status = 166;
CMD.dispense_hopper_coins = 167;
CMD.request_hopper_dispense_count = 168;
CMD.request_address_mode = 169;
CMD.request_base_year = 170;
CMD.request_hopper_coin = 171;
CMD.emergency_stop = 172;
CMD.request_thermistor_reading = 173;
CMD.request_payout_float = 174;
CMD.modify_payout_float = 175;
CMD.request_alarm_counter = 176;
CMD.handheld_function = 177;
CMD.request_bank_select = 178;
CMD.modify_bank_select = 179;
CMD.request_security_setting = 180;
CMD.modify_security_setting = 181;
CMD.download_calibration_info = 182;
CMD.upload_window_data = 183;
CMD.request_coin_id = 184;
CMD.modify_coin_id = 185;
CMD.request_payout_capacity = 186;
CMD.modify_payout_capacity = 187;
CMD.request_default_sorter_path = 188;
CMD.modify_default_sorter_path = 189;
CMD.keypad_control = 191;
CMD.request_build_code = 192;
CMD.request_fraud_counter = 193;
CMD.request_reject_counter = 194;
CMD.request_last_modification_date = 195;
CMD.request_creation_date = 196;
CMD.calculate_rom_checksum = 197;
CMD.counters_to_eeprom = 198;
CMD.configuration_to_eeprom = 199;
CMD.acmi_unencrypted_product_id = 200;
CMD.request_teach_status = 201;
CMD.teach_mode_control = 202;
CMD.display_control = 203;
CMD.meter_control = 204;
CMD.request_payout_absolute_count = 207;
CMD.modify_payout_absolute_count = 208;
CMD.request_sorter_paths = 209;
CMD.modify_sorter_paths = 210;
CMD.power_management_control = 211;
CMD.request_coin_position = 212;
CMD.request_option_flags = 213;
CMD.write_data_block = 214;
CMD.read_data_block = 215;
CMD.request_data_storage_availability = 216;
CMD.request_payout_highlow_status = 217;
CMD.enter_pin_number = 218;
CMD.enter_new_pin_number = 219;
CMD.acmi_encrypted_data = 220;
CMD.request_sorter_override_status = 221;
CMD.modify_sorter_override_status = 222;
CMD.modify_encrypted_inhibit_and_override_registers = 223;
CMD.request_encrypted_product_id = 224;
CMD.request_accept_counter = 225;
CMD.request_insertion_counter = 226;
CMD.request_master_inhibit_status = 227;
CMD.modify_master_inhibit_status = 228;
CMD.read_buffered_credit_or_error_codes = 229;
CMD.request_inhibit_status = 230;
CMD.modify_inhibit_status = 231;
CMD.perform_self_check = 232;
CMD.latch_output_lines = 233;
CMD.send_dh_public_key = 234;
CMD.read_dh_public_key = 235;
CMD.read_opto_states = 236;
CMD.read_input_lines = 237;
CMD.test_output_lines = 238;
CMD.operate_motors = 239;
CMD.test_solenoids = 240;
CMD.request_software_revision = 241;
CMD.request_serial_number = 242;
CMD.request_database_version = 243;
CMD.request_product_code = 244;
CMD.request_equipment_category_id = 245;
CMD.request_manufacturer_id = 246;
CMD.request_variable_set = 247;
CMD.request_status = 248;
CMD.request_polling_priority = 249;
CMD.address_random = 250;
CMD.address_change = 251;
CMD.address_clash = 252;
CMD.address_poll = 253;
CMD.simple_poll = 254;
CMD.factory_setup_and_test = 255;

module.exports = CMD;
