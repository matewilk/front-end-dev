'use strict';
export function mainController($scope, $mdSidenav, $log, $timeout)
    {
        $scope.toggleLeft = buildToggler('left');
        $scope.isOpenLeft = function(){
            return $mdSidenav('left').isOpen();
        };
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };

        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }

        $scope.user = {
            title: 'Senior Web Developer',
            location: 'London',
            company: 'BBC'
        }

        $scope.$watch('skills', function(newVal, oldVal){
            //can't refer to the oldVal as it will create infinite loop
            $scope.skills = {
                javascript: 80,
                html: 75,
                css: 75
            }
        }, true);

        var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. " +
		          "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor." +
		          "Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, " +
		          "ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor." +
		          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

	$scope.side = '';

	$scope.events = [{
		badgeClass: 'info',
        side: 'Right',
		badgeIconClass: 'assignment_ind',
		title: 'First heading',
		when: '11 hours ago via Twitter',
		content: 'Some awesome content.'
	}, {
		badgeClass: 'warning',
        side: 'Left',
		badgeIconClass: 'place',
		title: 'Second heading',
		when: '12 hours ago via Twitter',
		content: 'More awesome content.'
	}, {
		badgeClass: 'default',
        side: 'Right',
		badgeIconClass: 'local_library',
		title: 'Third heading',
		titleContentHtml: '<img class="img-responsive" src="http://www.freeimages.com/assets/183333/1833326510/wood-weel-1444183-m.jpg">',
		contentHtml: lorem,
		footerContentHtml: '<a href="">Continue Reading</a>'
	}, {
		badgeClass: 'warning',
        side: 'Left',
		badgeIconClass: 'event_note',
		title: 'Second heading',
		when: '12 hours ago via Twitter',
		content: 'More awesome content.'
	}, {
		badgeClass: 'info',
        side: 'Right',
		badgeIconClass: 'star',
		title: 'Second heading',
		when: '12 hours ago via Twitter',
		content: 'More awesome content.'
	}, {
		badgeClass: 'warning',
        side: 'Left',
		badgeIconClass: 'person_outline',
		title: 'Second heading',
		when: '12 hours ago via Twitter',
		content: 'More awesome content.'
	}];

	$scope.addEvent = function() {
		$scope.events.push({
			badgeClass: 'info',
			badgeIconClass: 'glyphicon-check',
			title: 'Dynamic heading',
			when: '3 hours ago via Twitter',
			content: 'Some awesome content.'
		});

	};
}
