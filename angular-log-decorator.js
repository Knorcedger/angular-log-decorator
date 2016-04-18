var logDecorator = angular.module('logDecorator', []);

logDecorator.config(function($provide, $logProvider) {
	$provide.decorator('$log', function($delegate) {
		$delegate.debug = function(title, logs) {
			if ($logProvider.debug) {
				var error = new Error();
				var stack = error.stack;

				if (!(logs instanceof Array)) {
					logs = [logs];
				}

				console.groupCollapsed(title + ':', logs[0]);
				for (var i = 1, length = logs.length; i < length; i++) {
					console.debug(logs[i]);
				}
				console.debug(stack);
				console.groupEnd();
			}
		};

		return $delegate;
	});
});
