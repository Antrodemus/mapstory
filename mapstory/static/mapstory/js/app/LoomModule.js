(function() {
  angular.module('loom', [
    'loom_configuration',
    'loom_map',
    'loom_notifications',
    'loom_notification_poster',
    'loom_notification_controller',
    'loom_update_notification',
    'loom_history',
    'loom_history_controller',
    'loom_diff',
    'loom_diff_controller',
    'loom_modal',
    'loom_addlayers',
    'loom_arrangeable',
    'loom_layers',
    'loom_geogit',
    'loom_pulldown',
    'loom_pulldown_controller',
    'loom_feature_manager',
    'loom_merge',
    'loom_sync',
    'loom_legend',
    'loom_table_view',
    'loom_utils',
    'loom_refresh',
    'loom_search',
    'loom_test',
    'loom_timeline'
  ]).constant('Configs', {
    url: SEARCH_URL,
    disableQuerySync: true
  });
}());
