function Is() {
	var agent = navigator.userAgent.toLowerCase();
	this.major = parseInt(navigator.appVersion);
	this.minor = parseFloat(navigator.appVersion);
	this.ns  = ((agent.indexOf('mozilla')!=-1) && ((agent.indexOf('spoofer')==-1) && (agent.indexOf('compatible') == -1)));
	this.ns2 = (this.ns && (this.major == 3));
	this.ns3 = (this.ns && (this.major == 3));
	this.ns4 = (this.ns && (this.major >= 4));
	this.ie   = (agent.indexOf("msie") != -1);
	this.ie3  = (this.ie && (this.major == 2));
	this.ie4  = (this.ie && (this.major >= 4));
	this.op3 = (agent.indexOf("opera") != -1);
}

var is = new Is()

if(is.ns4) {
	doc = "document";
	sty = "";
	htm = ".document"
} else if(is.ie4) {
	doc = "document.all";
	sty = ".style";
	htm = ""
}

function PreLoad() {
      formLyr = eval(doc + '["formLayer"]' + sty);
	formLyr.left = parseInt(available_width/2)-300;
	formLyr.top = 10;
	formLyr.visibility="visible";

	textLyr = eval(doc + '["textLayer"]' + sty);
	textLyr.left = 10;
	textLyr.top = 40;
}
   

function LookUp(Word2bSearched) {

    var IsFound = false;

    if(Word2bSearched.toLowerCase() == "abend reason code") { IsFound = true; Word2bSearched = "abend_reason_code"; }
    if(Word2bSearched.toLowerCase() == "active log") { IsFound = true; Word2bSearched = "active_log";}
    if(Word2bSearched.toLowerCase() == "adapter") { IsFound = true; Word2bSearched = "adapter";}
    if(Word2bSearched.toLowerCase() == "address space") { IsFound = true; Word2bSearched = "address_space"; }
    if(Word2bSearched.toLowerCase() == "address space identifier") { IsFound = true; Word2bSearched = "address_space_identifier"; }
    if(Word2bSearched.toLowerCase() == "administrator commands") { IsFound = true; Word2bSearched = "administrator_commands"; }
    if(Word2bSearched.toLowerCase() == "alert") { IsFound = true; Word2bSearched = "alert";}
    if(Word2bSearched.toLowerCase() == "alert monitor") { IsFound = true; Word2bSearched = "alert_monitor"; }
    if(Word2bSearched.toLowerCase() == "alias queue object") { IsFound = true; Word2bSearched = "alias_queue_object"; }
    if(Word2bSearched.toLowerCase() == "allied address space") { IsFound = true; Word2bSearched = "allied_address_space";}
    if(Word2bSearched.toLowerCase() == "ally") { IsFound = true; Word2bSearched = "ally";}
    if(Word2bSearched.toLowerCase() == "alternate user security") { IsFound = true; Word2bSearched = "alternate_user_security";}
    if(Word2bSearched.toUpperCase() == "APAR") { IsFound = true; Word2bSearched = "apar";}
    if(Word2bSearched.toLowerCase() == "application") { IsFound = true; Word2bSearched = "application"; }
    if(Word2bSearched.toLowerCase() == "application environment") { IsFound = true; Word2bSearched = "application_environment"; }
    if(Word2bSearched.toLowerCase() == "application log") { IsFound = true; Word2bSearched = "application_log"; }
    if(Word2bSearched.toLowerCase() == "application queue"){ IsFound = true; Word2bSearched = "application_queue"; }
    if(Word2bSearched.toLowerCase() == "archive log") { IsFound = true; Word2bSearched = "archive_log"; }
    if(Word2bSearched.toUpperCase() == "ASID") { IsFound = true; Word2bSearched = "asid";}
    if(Word2bSearched.toLowerCase() == "asynchronous messaging") { IsFound = true; Word2bSearched = "asynchronous_messaging"; }
    if(Word2bSearched.toLowerCase() == "attribute") { IsFound = true; Word2bSearched = "attribute";}
    if(Word2bSearched.toLowerCase() == "authorization checks") { IsFound = true; Word2bSearched = "authorization_checks"; }
    if(Word2bSearched.toLowerCase() == "authorization file") { IsFound = true; Word2bSearched = "authorization_file"; }
    if(Word2bSearched.toLowerCase() == "authorization service") { IsFound = true; Word2bSearched = "authorization_service"; }
    if(Word2bSearched.toLowerCase() == "authorized program analysis report") { IsFound = true; Word2bSearched = "authorized_program_analysis_report"; }
    if(Word2bSearched.toLowerCase() == "backout") { IsFound = true; Word2bSearched = "backout";}
    if(Word2bSearched.toLowerCase() == "basic mapping support") { IsFound = true; Word2bSearched = "basic_mapping_support";}
    if(Word2bSearched.toLowerCase() == "blow up to detail") { IsFound = true; Word2bSearched = "blow_up_to_detail"; }
    if(Word2bSearched.toUpperCase() == "BMS") { IsFound = true; Word2bSearched = "BMS";}
    if(Word2bSearched.toLowerCase() == "bootstrap data set") { IsFound = true; Word2bSearched = "bootstrap_data_set";}
    if(Word2bSearched.toLowerCase() == "browse") { IsFound = true; Word2bSearched = "browse";}
    if(Word2bSearched.toLowerCase() == "browse cursor") { IsFound = true; Word2bSearched = "browse_cursor";}
    if(Word2bSearched.toUpperCase() == "BSDS") { IsFound = true; Word2bSearched = "BSDS";}
    if(Word2bSearched.toLowerCase() == "buffer pool") { IsFound = true; Word2bSearched = "buffer_pool";}
    if(Word2bSearched.toLowerCase() == "call") { IsFound = true; Word2bSearched = "call"; }
    if(Word2bSearched.toLowerCase() == "call back") { IsFound = true; Word2bSearched = "call_back";}
    if(Word2bSearched.toUpperCase() == "CCF") { IsFound = true; Word2bSearched = "CCF";}
    if(Word2bSearched.toUpperCase() == "CCSID") { IsFound = true; Word2bSearched = "CCSID";}
    if(Word2bSearched.toUpperCase() == "CDF") { IsFound = true; Word2bSearched = "CDF";}
    if(Word2bSearched.toLowerCase() == "channel") { IsFound = true; Word2bSearched = "channel";}
    if(Word2bSearched.toLowerCase() == "channel control function") { IsFound = true; Word2bSearched = "channel_control_function";}
    if(Word2bSearched.toLowerCase() == "channel definition file") { IsFound = true; Word2bSearched = "channel_definition_file";}
    if(Word2bSearched.toLowerCase() == "channel event") { IsFound = true; Word2bSearched = "channel_event";}
    if(Word2bSearched.toLowerCase() == "checkpoint") { IsFound = true; Word2bSearched = "checkpoint";}
    if(Word2bSearched.toUpperCase() == "CI") { IsFound = true; Word2bSearched = "CI";}
    if(Word2bSearched.toLowerCase() == "circular logging") { IsFound = true; Word2bSearched = "circular_logging";}
    if(Word2bSearched.toUpperCase() == "CL") { IsFound = true; Word2bSearched = "CL";}
    if(Word2bSearched.toLowerCase() == "client") { IsFound = true; Word2bSearched = "client";}
    if(Word2bSearched.toLowerCase() == "client application") { IsFound = true; Word2bSearched = "client_application";}
    if(Word2bSearched.toLowerCase() == "client connection channel type") { IsFound = true; Word2bSearched = "client_connection_channel_type";}
    if(Word2bSearched.toLowerCase() == "cluster") { IsFound = true; Word2bSearched = "cluster";}
    if(Word2bSearched.toLowerCase() == "coded character set identifier") { IsFound = true; Word2bSearched = "coded_character_set_identifier";}
    if(Word2bSearched.toLowerCase() == "command") { IsFound = true; Word2bSearched = "command";}
    if(Word2bSearched.toLowerCase() == "command prefix") { IsFound = true; Word2bSearched = "command_prefix";}
    if(Word2bSearched.toLowerCase() == "command processor") { IsFound = true; Word2bSearched = "command_processor";}
    if(Word2bSearched.toLowerCase() == "command server") { IsFound = true; Word2bSearched = "command_server";}
    if(Word2bSearched.toLowerCase() == "commit") { IsFound = true; Word2bSearched = "commit";}
    if(Word2bSearched.toLowerCase() == "completion code") { IsFound = true; Word2bSearched = "completion_code";}
    if(Word2bSearched.toLowerCase() == "communications connection") { IsFound = true; Word2bSearched = "communications_connection"; }
    if(Word2bSearched.toLowerCase() == "configuration file") { IsFound = true; Word2bSearched = "configuration_file";}
    if(Word2bSearched.toLowerCase() == "connect") { IsFound = true; Word2bSearched = "connect";}
    if(Word2bSearched.toLowerCase() == "connection handle") { IsFound = true; Word2bSearched = "connection_handle";}
    if(Word2bSearched.toLowerCase() == "connection to a queue manager") { IsFound = true; Word2bSearched = "connection_to_a_q_manager"; }
    if(Word2bSearched.toLowerCase() == "context") { IsFound = true; Word2bSearched = "context";}
    if(Word2bSearched.toLowerCase() == "context security") { IsFound = true; Word2bSearched = "context_security";}
    if(Word2bSearched.toLowerCase() == "control command") { IsFound = true; Word2bSearched = "control_command";}
    if(Word2bSearched.toLowerCase() == "control interval") { IsFound = true; Word2bSearched = "control_interval";}
    if(Word2bSearched.toLowerCase() == "control language") { IsFound = true; Word2bSearched = "control_language";}
    if(Word2bSearched.toLowerCase() == "controlled shutdown") { IsFound = true; Word2bSearched = "controlled_shutdown";}
    if(Word2bSearched.toUpperCase() == "CPF") { IsFound = true; Word2bSearched = "CPF";}
    if(Word2bSearched.toUpperCase() == "DAE") { IsFound = true; Word2bSearched = "DAE";}
    if(Word2bSearched.toLowerCase() == "database record flow") { IsFound = true; Word2bSearched = "database_record_flow"; }
    if(Word2bSearched.toLowerCase() == "data flow") { IsFound = true; Word2bSearched = "data_flow"; }
    if(Word2bSearched.toLowerCase() == "data conversion interface") { IsFound = true; Word2bSearched = "data_conversion_interface";}
    if(Word2bSearched.toLowerCase() == "datagram") { IsFound = true; Word2bSearched = "datagram";}
    if(Word2bSearched.toLowerCase() == "data type") { IsFound = true; Word2bSearched = "data_type"; }
    if(Word2bSearched.toUpperCase() == "DCE") { IsFound = true; Word2bSearched = "DCE";}
    if(Word2bSearched.toUpperCase() == "DCI") { IsFound = true; Word2bSearched = "DCI";}
    if(Word2bSearched.toLowerCase() == "dead-letter queue") { IsFound = true; Word2bSearched = "dead_letter_queue";}
    if(Word2bSearched.toLowerCase() == "dead-letter queue handler") { IsFound = true; Word2bSearched = "dead_letter_queue_handler";}
    if(Word2bSearched.toLowerCase() == "default object") { IsFound = true; Word2bSearched = "default_object";}
    if(Word2bSearched.toLowerCase() == "deferred connection") { IsFound = true; Word2bSearched = "deferred_connection";}
    if(Word2bSearched.toLowerCase() == "distributed application") { IsFound = true; Word2bSearched = "distributed_application";}
    if(Word2bSearched.toLowerCase() == "distributed computing environment") { IsFound = true; Word2bSearched = "distributed_computing_environment";}
    if(Word2bSearched.toLowerCase() == "distributed queue management") { IsFound = true; Word2bSearched = "distributed_queue_management";}
    if(Word2bSearched.toUpperCase() == "DLQ") { IsFound = true; Word2bSearched = "DLQ";}
    if(Word2bSearched.toUpperCase() == "DQM") { IsFound = true; Word2bSearched = "DQM";}
    if(Word2bSearched.toLowerCase() == "dual logging") { IsFound = true; Word2bSearched = "dual_logging";}
    if(Word2bSearched.toLowerCase() == "dual mode") { IsFound = true; Word2bSearched = "dual_mode";}
    if(Word2bSearched.toLowerCase() == "dump analysis and elimination") { IsFound = true; Word2bSearched = "dump_analysis_and_elimination";}
    if(Word2bSearched.toLowerCase() == "dynamic queue") { IsFound = true; Word2bSearched = "dynamic_queue";}
    if(Word2bSearched.toLowerCase() == "environment") { IsFound = true; Word2bSearched = "environment";}
    if(Word2bSearched.toUpperCase() == "ESM") { IsFound = true; Word2bSearched = "ESM";}
    if(Word2bSearched.toUpperCase() == "ESTAE") { IsFound = true; Word2bSearched = "ESTAE";}
    if(Word2bSearched.toLowerCase() == "event") { IsFound = true; Word2bSearched = "event"; }
    if(Word2bSearched.toLowerCase() == "event data") { IsFound = true; Word2bSearched = "event_data";}
    if(Word2bSearched.toLowerCase() == "event header") { IsFound = true; Word2bSearched = "event_header";}
    if(Word2bSearched.toLowerCase() == "event log") { IsFound = true; Word2bSearched = "event_log";}
    if(Word2bSearched.toLowerCase() == "event message") { IsFound = true; Word2bSearched = "event_message";}
    if(Word2bSearched.toLowerCase() == "event queue") { IsFound = true; Word2bSearched = "event_queue";}
    if(Word2bSearched.toLowerCase() == "event viewer") { IsFound = true; Word2bSearched = "event_viewer";}
    if(Word2bSearched.toLowerCase() == "extended specify task abnormal exit") { IsFound = true; Word2bSearched = "extended_specify_task_abnormal_exit";}
    if(Word2bSearched.toLowerCase() == "external security manager") { IsFound = true; Word2bSearched = "external_security_manager";}
    if(Word2bSearched.toUpperCase() == "FFST") { IsFound = true; Word2bSearched = "FFST";}
    if(Word2bSearched.toUpperCase() == "FIFO") { IsFound = true; Word2bSearched = "FIFO";}
    if(Word2bSearched.toLowerCase() == "first failure support technology") { IsFound = true; Word2bSearched = "first_failure_support_technology";}
    if(Word2bSearched.toLowerCase() == "first-in-first-out") { IsFound = true; Word2bSearched = "first_in_first_out";}
    if(Word2bSearched.toLowerCase() == "flow of attributes") { IsFound = true; Word2bSearched = "flow_of_attributes"; }
    if(Word2bSearched.toLowerCase() == "forced shutdown") { IsFound = true; Word2bSearched = "forced_shutdown";}
    if(Word2bSearched.toLowerCase() == "framework") { IsFound = true; Word2bSearched = "framework";}
    if(Word2bSearched.toUpperCase() == "FRR") { IsFound = true; Word2bSearched = "FRR";}
    if(Word2bSearched.toLowerCase() == "functional recovery routine") { IsFound = true; Word2bSearched = "functional_recovery_routine";}
    if(Word2bSearched.toUpperCase() == "GCPC") { IsFound = true; Word2bSearched = "GCPC";}
    if(Word2bSearched.toLowerCase() == "generalized command preprocessor") { IsFound = true; Word2bSearched = "generalized_command_preprocessor";}
    if(Word2bSearched.toLowerCase() == "generalized trace facility") { IsFound = true; Word2bSearched = "generalized_trace_facility";}
    if(Word2bSearched.toLowerCase() == "get") { IsFound = true; Word2bSearched = "get";}
    if(Word2bSearched.toLowerCase() == "global trace") { IsFound = true; Word2bSearched = "global_trace";}
    if(Word2bSearched.toUpperCase() == "GTF") { IsFound = true; Word2bSearched = "GTF";}
    if(Word2bSearched.toLowerCase() == "handle") { IsFound = true; Word2bSearched = "handle";}
    if(Word2bSearched.toLowerCase() == "hardened message") { IsFound = true; Word2bSearched = "hardened_message";}
    if(Word2bSearched.toLowerCase() == "immediate shutdown") { IsFound = true; Word2bSearched = "immediate_shutdown";}
    if(Word2bSearched.toLowerCase() == "in-doubt unit of recovery") { IsFound = true; Word2bSearched = "in_doubt_unit_of_recovery";}
    if(Word2bSearched.toLowerCase() == ".ini file") { IsFound = true; Word2bSearched = "ini_file";}
    if(Word2bSearched.toLowerCase() == "initialization input data sets") { IsFound = true; Word2bSearched = "initialization_input_data_sets";}
    if(Word2bSearched.toLowerCase() == "initiate communications connection") { IsFound = true; Word2bSearched = "initiate_communications_connection";}
    if(Word2bSearched.toLowerCase() == "initiation queue") { IsFound = true; Word2bSearched = "initiation_queue";}
    if(Word2bSearched.toLowerCase() == "input/output parameter") { IsFound = true; Word2bSearched = "input_output_parameter";}
    if(Word2bSearched.toLowerCase() == "input parameter") { IsFound = true; Word2bSearched = "input_parameter";}
    if(Word2bSearched.toLowerCase() == "inspecting") { IsFound = true; Word2bSearched = "inspecting"; }
    if(Word2bSearched.toLowerCase() == "installable services") { IsFound = true; Word2bSearched = "installable_services";}
    if(Word2bSearched.toLowerCase() == "instrumentation event") { IsFound = true; Word2bSearched = "instrumentation_event";}
    if(Word2bSearched.toLowerCase() == "interactive system productivity facility") { IsFound = true; Word2bSearched = "interactive_system_productivity_facility";}
    if(Word2bSearched.toUpperCase() == "IPCS") { IsFound = true; Word2bSearched = "IPCS";}
    if(Word2bSearched.toUpperCase() == "ISPF") { IsFound = true; Word2bSearched = "ISPF";}
    if(Word2bSearched.toLowerCase() == "linear logging") { IsFound = true; Word2bSearched = "linear_logging";}
    if(Word2bSearched.toLowerCase() == "listener") { IsFound = true; Word2bSearched = "listener";}
    if(Word2bSearched.toLowerCase() == "local definition") { IsFound = true; Word2bSearched = "local_definition";}
    if(Word2bSearched.toLowerCase() == "local definition of a remote queue") { IsFound = true; Word2bSearched = "local_definition_of_a_remote_queue";}
    if(Word2bSearched.toLowerCase() == "locale") { IsFound = true; Word2bSearched = "locale";}
    if(Word2bSearched.toLowerCase() == "local queue") { IsFound = true; Word2bSearched = "local_queue";}
    if(Word2bSearched.toLowerCase() == "local queue manager") { IsFound = true; Word2bSearched = "local_queue_manager";}
    if(Word2bSearched.toLowerCase() == "log") { IsFound = true; Word2bSearched = "log";}
    if(Word2bSearched.toLowerCase() == "log control file") { IsFound = true; Word2bSearched = "log_control_file";}
    if(Word2bSearched.toLowerCase() == "log file") { IsFound = true; Word2bSearched = "log_file";}
    if(Word2bSearched.toLowerCase() == "logical unit of work") { IsFound = true; Word2bSearched = "logical_unit_of_work";}
    if(Word2bSearched.toLowerCase() == "machine check interrupt") { IsFound = true; Word2bSearched = "machine_check_interrupt";}
    if(Word2bSearched.toUpperCase() == "MCA") { IsFound = true; Word2bSearched = "MCA";}
    if(Word2bSearched.toUpperCase() == "MCI") { IsFound = true; Word2bSearched = "MCI";}
    if(Word2bSearched.toLowerCase() == "media image") { IsFound = true; Word2bSearched = "media_image";}
    if(Word2bSearched.toLowerCase() == "message") { IsFound = true; Word2bSearched = "message";}
    if(Word2bSearched.toLowerCase() == "message channel") { IsFound = true; Word2bSearched = "message_channel";}
    if(Word2bSearched.toLowerCase() == "message channel agent") { IsFound = true; Word2bSearched = "message_channel_agent";}
    if(Word2bSearched.toLowerCase() == "message channel interface") { IsFound = true; Word2bSearched = "message_channel_interface";}
    if(Word2bSearched.toLowerCase() == "message descriptor") { IsFound = true; Word2bSearched = "message_descriptor";}
    if(Word2bSearched.toLowerCase() == "message flow") { IsFound = true; Word2bSearched = "message_flow"; }
    if(Word2bSearched.toLowerCase() == "message priority") { IsFound = true; Word2bSearched = "message_priority";}
    if(Word2bSearched.toLowerCase() == "message queue") { IsFound = true; Word2bSearched = "message_queue";}
    if(Word2bSearched.toLowerCase() == "message queue interface") { IsFound = true; Word2bSearched = "message_queue_interface";}
    if(Word2bSearched.toLowerCase() == "message queuing") { IsFound = true; Word2bSearched = "message_queuing";}
    if(Word2bSearched.toLowerCase() == "message sequence numbering") { IsFound = true; Word2bSearched = "message_sequence_numbering";}
    if(Word2bSearched.toLowerCase() == "messaging") { IsFound = true; Word2bSearched = "messaging";}
    if(Word2bSearched.toLowerCase() == "model queue object") { IsFound = true; Word2bSearched = "model_queue_object";}
    if(Word2bSearched.toUpperCase() == "MQAI") { IsFound = true; Word2bSearched = "MQAI";}
    if(Word2bSearched.toUpperCase() == "MQI") { IsFound = true; Word2bSearched = "MQI";}
    if(Word2bSearched.toLowerCase() == "mqi channel") { IsFound = true; Word2bSearched = "mqi_channel";}
    if(Word2bSearched.toUpperCase() == "MQSC") { IsFound = true; Word2bSearched = "mqsc";}
    if(Word2bSearched.toLowerCase() == "mqseries") { IsFound = true; Word2bSearched = "mqseries";}
    if(Word2bSearched.toLowerCase() == "mqseries administration interface") { IsFound = true; Word2bSearched = "mqseries_administration_interface";}
    if(Word2bSearched.toLowerCase() == "mqseries client") { IsFound = true; Word2bSearched = "mqseries_client";}
    if(Word2bSearched.toLowerCase() == "mqseries commands") { IsFound = true; Word2bSearched = "mqseries_commands";}
    if(Word2bSearched.toLowerCase() == "namelist") { IsFound = true; Word2bSearched = "namelist";}
    if(Word2bSearched.toLowerCase() == "name service") { IsFound = true; Word2bSearched = "name_service";}
    if(Word2bSearched.toLowerCase() == "name service interface") { IsFound = true; Word2bSearched = "name_service_interface";}
    if(Word2bSearched.toLowerCase() == "name transformation") { IsFound = true; Word2bSearched = "name_transformation";}
    if(Word2bSearched.toLowerCase() == "new technology file system") { IsFound = true; Word2bSearched = "new_technology_file_system";}
    if(Word2bSearched.toLowerCase() == "node") { IsFound = true; Word2bSearched = "node"; }
    if(Word2bSearched.toLowerCase() == "no message available") { IsFound = true; Word2bSearched = "no_message_available"; }
    if(Word2bSearched.toLowerCase() == "nonpersistent message") { IsFound = true; Word2bSearched = "nonpersistent_message";}
    if(Word2bSearched.toUpperCase() == "NSI") { IsFound = true; Word2bSearched = "NSI";}
    if(Word2bSearched.toUpperCase() == "NTFS") { IsFound = true; Word2bSearched = "NTFS";}
    if(Word2bSearched.toLowerCase() == "null character") { IsFound = true; Word2bSearched = "null_character";}
    if(Word2bSearched.toUpperCase() == "OAM") { IsFound = true; Word2bSearched = "OAM";}
    if(Word2bSearched.toLowerCase() == "object") { IsFound = true; Word2bSearched = "object";}
    if(Word2bSearched.toLowerCase() == "object authority manager") { IsFound = true; Word2bSearched = "object_authority_manager";}
    if(Word2bSearched.toLowerCase() == "object descriptor") { IsFound = true; Word2bSearched = "object_descriptor";}
    if(Word2bSearched.toLowerCase() == "object handle") { IsFound = true; Word2bSearched = "object_handle";}
    if(Word2bSearched.toLowerCase() == "off-loading") { IsFound = true; Word2bSearched = "off_loading";}
    if(Word2bSearched.toLowerCase() == "output log-buffer") { IsFound = true; Word2bSearched = "output_log_buffer";}
    if(Word2bSearched.toLowerCase() == "output parameter") { IsFound = true; Word2bSearched = "output_parameter";}
    if(Word2bSearched.toLowerCase() == "page set") { IsFound = true; Word2bSearched = "page_set";}
    if(Word2bSearched.toLowerCase() == "parameter") { IsFound = true; Word2bSearched = "parameter"; }
    if(Word2bSearched.toLowerCase() == "parameter flow") { IsFound = true; Word2bSearched = "parameter_flow"; }
    if(Word2bSearched.toLowerCase() == "PCF") { IsFound = true; 
Word2bSearched = "PCF";}
    if(Word2bSearched.toLowerCase() == "pcf command") { IsFound = true; Word2bSearched = "pcf_command";}
    if(Word2bSearched.toLowerCase() == "pending event") { IsFound = true; Word2bSearched = "pending_event";}
    if(Word2bSearched.toLowerCase() == "percolation") { IsFound = true; Word2bSearched = "percolation";}
    if(Word2bSearched.toLowerCase() == "performance event") { IsFound = true; Word2bSearched = "performance_event";}
    if(Word2bSearched.toLowerCase() == "performance trace") { IsFound = true; Word2bSearched = "performance_trace";}
    if(Word2bSearched.toLowerCase() == "permanent dynamic queue") { IsFound = true; Word2bSearched = "permanent_dynamic_queue";}
    if(Word2bSearched.toLowerCase() == "persistent message") { IsFound = true; Word2bSearched = "persistent_message";}
    if(Word2bSearched.toLowerCase() == "ping") { IsFound = true; Word2bSearched = "pig";}
    if(Word2bSearched.toLowerCase() == "platform") { IsFound = true; Word2bSearched = "platform";}
    if(Word2bSearched.toLowerCase() == "point of recovery") { IsFound = true; Word2bSearched = "point_of_recovery";}
    if(Word2bSearched.toLowerCase() == "pointer") { IsFound = true; Word2bSearched = "pointer"; }
    if(Word2bSearched.toLowerCase() == "preemptive shutdown") { IsFound = true; Word2bSearched = "preemptive_shutdown";}
    if(Word2bSearched.toLowerCase() == "principal") { IsFound = true; Word2bSearched = "principal";}
    if(Word2bSearched.toLowerCase() == "process") { IsFound = true; Word2bSearched = "process"; }
    if(Word2bSearched.toLowerCase() == "process definition object") { IsFound = true; Word2bSearched = "process_definition_object";}
    if(Word2bSearched.toLowerCase() == "programmable command format") { IsFound = true; Word2bSearched = "programmable_command_format";}
    if(Word2bSearched.toLowerCase() == "program temporary fix") { IsFound = true; Word2bSearched = "program_temporary_fix";}
    if(Word2bSearched.toUpperCase() == "PTF") { IsFound = true; Word2bSearched = "PTF";}
    if(Word2bSearched.toLowerCase() == "queue") { IsFound = true; Word2bSearched = "queue";}
    if(Word2bSearched.toLowerCase() == "queue manager") { IsFound = true; Word2bSearched = "queue_manager";}
    if(Word2bSearched.toLowerCase() == "queue manager event") { IsFound = true; Word2bSearched = "queue_manager_event";}
    if(Word2bSearched.toLowerCase() == "queue with messages") { IsFound = true; Word2bSearched = "q_with_messages"; }
    if(Word2bSearched.toLowerCase() == "queue without messages") { IsFound = true; Word2bSearched = "q_without_messages"; }
    if(Word2bSearched.toLowerCase() == "queuing") { IsFound = true; Word2bSearched = "queuing";}
    if(Word2bSearched.toLowerCase() == "quiesced shutdown") { IsFound = true; Word2bSearched = "quiesced_shutdown";}
    if(Word2bSearched.toLowerCase() == "quiescing") { IsFound = true; Word2bSearched = "quiescing";}
    if(Word2bSearched.toUpperCase() == "RBA") { IsFound = true; Word2bSearched = "RBA";}
    if(Word2bSearched.toLowerCase() == "reason code") { IsFound = true; Word2bSearched = "reason_code";}
    if(Word2bSearched.toLowerCase() == "receiver channel") { IsFound = true; Word2bSearched = "receiver_channel";}
    if(Word2bSearched.toLowerCase() == "recovery log") { IsFound = true; Word2bSearched = "recovery_log";}
    if(Word2bSearched.toLowerCase() == "recovery termination manager") { IsFound = true; Word2bSearched = "recovery_termination_manager";}
    if(Word2bSearched.toLowerCase() == "registry") { IsFound = true; Word2bSearched = "registry";}
    if(Word2bSearched.toLowerCase() == "registry editor") { IsFound = true; Word2bSearched = "registry_editor";}
    if(Word2bSearched.toLowerCase() == "registry hive") { IsFound = true; Word2bSearched = "registry_hive";}
    if(Word2bSearched.toLowerCase() == "relative byte address") { IsFound = true; Word2bSearched = "relative_byte_address";}
    if(Word2bSearched.toLowerCase() == "remote queue") { IsFound = true; Word2bSearched = "remote_queue";}
    if(Word2bSearched.toLowerCase() == "remote queue manager") { IsFound = true; Word2bSearched = "remote_queue_manager";}
    if(Word2bSearched.toLowerCase() == "remote queue object") { IsFound = true; Word2bSearched = "remote_queue_object";}
    if(Word2bSearched.toLowerCase() == "remote queuing") { IsFound = true; Word2bSearched = "remote_queuing";}
    if(Word2bSearched.toLowerCase() == "reply message") { IsFound = true; Word2bSearched = "reply_message";}
    if(Word2bSearched.toLowerCase() == "reply-to queue") { IsFound = true; Word2bSearched = "reply_to_queue";}
    if(Word2bSearched.toLowerCase() == "report message") { IsFound = true; Word2bSearched = "report_message";}
    if(Word2bSearched.toLowerCase() == "requester channel") { IsFound = true; Word2bSearched = "requester_channel";}
    if(Word2bSearched.toLowerCase() == "request message") { IsFound = true; Word2bSearched = "request_message";}
    if(Word2bSearched.toUpperCase() == "RESLEVEL") { IsFound = true; Word2bSearched = "RESLEVEL";}
    if(Word2bSearched.toLowerCase() == "resolution path") { IsFound = true; Word2bSearched = "resolution_path";}
    if(Word2bSearched.toLowerCase() == "resource") { IsFound = true; Word2bSearched = "resource";}
    if(Word2bSearched.toLowerCase() == "resource manager") { IsFound = true; Word2bSearched = "resource_manager";}
    if(Word2bSearched.toLowerCase() == "resource recovery services") { IsFound = true; Word2bSearched = "resource_recovery_services";}
    if(Word2bSearched.toLowerCase() == "responder") { IsFound = true; Word2bSearched = "responder";}
    if(Word2bSearched.toLowerCase() == "resynch") { IsFound = true; Word2bSearched = "resynch";}
    if(Word2bSearched.toLowerCase() == "return codes") { IsFound = true; Word2bSearched = "return_codes";}
    if(Word2bSearched.toLowerCase() == "rollback") { IsFound = true; Word2bSearched = "rollback";}
    if(Word2bSearched.toUpperCase() == "RRS") { IsFound = true; Word2bSearched = "RRS";}
    if(Word2bSearched.toUpperCase() == "RTM") { IsFound = true; Word2bSearched = "RTM";}
    if(Word2bSearched.toLowerCase() == "rules table") { IsFound = true; Word2bSearched = "rules_table";}
    if(Word2bSearched.toUpperCase() == "SAF") { IsFound = true; Word2bSearched = "SAF";}
    if(Word2bSearched.toUpperCase() == "SDWA") { IsFound = true; Word2bSearched = "SDWA";}
    if(Word2bSearched.toLowerCase() == "security enabling interface") { IsFound = true; Word2bSearched = "security_enabling_interface";}
    if(Word2bSearched.toUpperCase() == "SEI") { IsFound = true; Word2bSearched = "SEI";}
    if(Word2bSearched.toLowerCase() == "sender channel") { IsFound = true; Word2bSearched = "sender_channel";}
    if(Word2bSearched.toLowerCase() == "sequential delivery") { IsFound = true; Word2bSearched = "sequential_delivery";}
    if(Word2bSearched.toLowerCase() == "sequential number wrap value") { IsFound = true; Word2bSearched = "sequential_number_wrap_value";}
    if(Word2bSearched.toLowerCase() == "server") { IsFound = true; Word2bSearched = "server";}
    if(Word2bSearched.toLowerCase() == "server channel") { IsFound = true; Word2bSearched = "server_channel";}
    if(Word2bSearched.toLowerCase() == "server connection channel type") { IsFound = true; Word2bSearched = "server_connection_channel_type";}
    if(Word2bSearched.toLowerCase() == "service_interval") { IsFound = true; Word2bSearched = "service_interval";}
    if(Word2bSearched.toLowerCase() == "service interval event") { IsFound = true; Word2bSearched = "service_interval_event";}
    if(Word2bSearched.toLowerCase() == "session id") { IsFound = true; Word2bSearched = "session_id";}
    if(Word2bSearched.toLowerCase() == "shutdown") { IsFound = true; Word2bSearched = "shutdown";}
    if(Word2bSearched.toLowerCase() == "signaling") { IsFound = true; Word2bSearched = "signalling";}
    if(Word2bSearched.toLowerCase() == "single logging") { IsFound = true; Word2bSearched = "single_logging";}
    if(Word2bSearched.toLowerCase() == "single-phase backout") { IsFound = true; Word2bSearched = "single_phase_backout";}
    if(Word2bSearched.toLowerCase() == "single-phase commit") { IsFound = true; Word2bSearched = "single_phase_commit";}
    if(Word2bSearched.toUpperCase() == "SIT") { IsFound = true; Word2bSearched = "SIT";}
    if(Word2bSearched.toLowerCase() == "stanza") { IsFound = true; Word2bSearched = "stanza";}
    if(Word2bSearched.toLowerCase() == "starting an application") { IsFound = true; Word2bSearched = "starting_an_application"; }
    if(Word2bSearched.toLowerCase() == "storage class") { IsFound = true; Word2bSearched = "storage_class";}
    if(Word2bSearched.toLowerCase() == "store and forward") { IsFound = true; Word2bSearched = "store_and_forward";}
    if(Word2bSearched.toLowerCase() == "structure") { IsFound = true; Word2bSearched = "structure"; }
    if(Word2bSearched.toLowerCase() == "subsystem") { IsFound = true; Word2bSearched = "subsystem";}
    if(Word2bSearched.toLowerCase() == "supervisor call") { IsFound = true; Word2bSearched = "supervisor_call";}
    if(Word2bSearched.toUpperCase() == "SVC") { IsFound = true; Word2bSearched = "SVC";}
    if(Word2bSearched.toLowerCase() == "switch profile") { IsFound = true; Word2bSearched = "switch_profile";}
    if(Word2bSearched.toLowerCase() == "sympton string") { IsFound = true; Word2bSearched = "sympton_string";}
    if(Word2bSearched.toLowerCase() == "synchronous messaging") { IsFound = true; Word2bSearched = "synchronous_messaging";}
    if(Word2bSearched.toLowerCase() == "syncpoint") { IsFound = true; Word2bSearched = "syncpoint";}
    if(Word2bSearched.toLowerCase() == "system authorization facility") { IsFound = true; Word2bSearched = "system_authorization_facility";}
    if(Word2bSearched.toLowerCase() == "system.command.input queue") { IsFound = true; Word2bSearched = "system_command_input_queue";}
    if(Word2bSearched.toLowerCase() == "system control commands") { IsFound = true; Word2bSearched = "system_control_commands";}
    if(Word2bSearched.toLowerCase() == "system diagnostic work area") { IsFound = true; Word2bSearched = "system_diagnostic_work_area";}
    if(Word2bSearched.toLowerCase() == "system initialization table") { IsFound = true; Word2bSearched = "system_initialization_table";}
    if(Word2bSearched.toUpperCase() == "SYS1.LOGREC") { IsFound = true; Word2bSearched = "SYS1.LOGREC";}
    if(Word2bSearched.toUpperCase() == "TACL") { IsFound = true; Word2bSearched = "TACL";}
    if(Word2bSearched.toLowerCase() == "target library high-level qualifier") { IsFound = true; Word2bSearched = "target_library_high_level_qualifier";}
    if(Word2bSearched.toLowerCase() == "task control block") { IsFound = true; Word2bSearched = "task_control_block";}
    if(Word2bSearched.toLowerCase() == "task switching") { IsFound = true; Word2bSearched = "task_switching";}
    if(Word2bSearched.toUpperCase() == "TCB") { IsFound = true; Word2bSearched = "TCB";}
    if(Word2bSearched.toLowerCase() == "temporary dynamic queue") { IsFound = true; Word2bSearched = "temporary_dynamic_queue";}
    if(Word2bSearched.toLowerCase() == "termination notification") { IsFound = true; Word2bSearched = "termination_notification";}
    if(Word2bSearched.toLowerCase() == "thlqual") { IsFound = true; Word2bSearched = "thlqual";}
    if(Word2bSearched.toLowerCase() == "thread") { IsFound = true; Word2bSearched = "thread";}
    if(Word2bSearched.toLowerCase() == "time-independent messaging") { IsFound = true; Word2bSearched = "time_independent_messaging";}
    if(Word2bSearched.toUpperCase() == "TMI") { IsFound = true; Word2bSearched = "TMI";}
    if(Word2bSearched.toLowerCase() == "trace") { IsFound = true; Word2bSearched = "trace";}
    if(Word2bSearched.toLowerCase() == "tranid") { IsFound = true; Word2bSearched = "tranid";}
    if(Word2bSearched.toLowerCase() == "transaction identifier") { IsFound = true; Word2bSearched = "transaction_identifier";}
    if(Word2bSearched.toLowerCase() == "transmission program") { IsFound = true; Word2bSearched = "transmission_program";}
    if(Word2bSearched.toLowerCase() == "transmission queue") { IsFound = true; Word2bSearched = "transmission_queue";}
    if(Word2bSearched.toLowerCase() == "trigger event") { IsFound = true; Word2bSearched = "trigger_event";}
    if(Word2bSearched.toLowerCase() == "triggering") { IsFound = true; Word2bSearched = "triggering";}
    if(Word2bSearched.toLowerCase() == "trigger message") { IsFound = true; Word2bSearched = "trigger_message";}
    if(Word2bSearched.toLowerCase() == "trigger monitor") { IsFound = true; Word2bSearched = "trigger_monitor";}
    if(Word2bSearched.toLowerCase() == "trigger monitor interface") { IsFound = true; Word2bSearched = "trigger_monitor_interface";}
    if(Word2bSearched.toLowerCase() == "two-phase commit") { IsFound = true; Word2bSearched = "two_phase_commit";}
    if(Word2bSearched.toUpperCase() == "UIS") { IsFound = true; Word2bSearched = "UIS";}
    if(Word2bSearched.toLowerCase() == "undelivered-message queue") { IsFound = true; Word2bSearched = "undelivered_message_queue";}
    if(Word2bSearched.toLowerCase() == "undo/redo record") { IsFound = true; Word2bSearched = "undo_redo_record";}
    if(Word2bSearched.toLowerCase() == "unit of recovery") { IsFound = true; Word2bSearched = "unit_of_recovery";}
    if(Word2bSearched.toLowerCase() == "unit of work") { IsFound = true; Word2bSearched = "unit_of_work";}
    if(Word2bSearched.toLowerCase() == "user identifier service") { IsFound = true; Word2bSearched = "user_identifier_service";}
    if(Word2bSearched.toLowerCase() == "utility") { IsFound = true; Word2bSearched = "utility";}
    if(Word2bSearched.toLowerCase() == "woken up by event") { IsFound = true; Word2bSearched = "woken_up_by_event"; }

    if(IsFound) {
     textLyr.visibility = "hidden";
     parent.onbottom.document.location = 'glossExp.htm#' + Word2bSearched ;
    } else {
        textLyr.visibility="visible";
    }
}

function LinkUp(where2go)
{
  parent.onbottom.document.location.href = where2go;
}