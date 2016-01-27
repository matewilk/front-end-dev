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
        side: 'right',
		badgeIconClass: 'glyphicon-check',
		title: 'First heading',
		when: '11 hours ago via Twitter',
		content: 'Some awesome content.'
	}, {
		badgeClass: 'warning',
        side: 'left',
		badgeIconClass: 'glyphicon-credit-card',
		title: 'Second heading',
		when: '12 hours ago via Twitter',
		content: 'More awesome content.'
	}, {
		badgeClass: 'default',
        side: 'right',
		badgeIconClass: 'glyphicon-credit-card',
		title: 'Third heading',
		titleContentHtml: '<img class="img-responsive" src="http://www.freeimages.com/assets/183333/1833326510/wood-weel-1444183-m.jpg">',
		contentHtml: lorem,
		footerContentHtml: '<a href="">Continue Reading</a>'
	}, {
		badgeClass: 'warning',
        side: 'left',
		badgeIconClass: 'glyphicon-credit-card',
		title: 'Second heading',
		when: '12 hours ago via Twitter',
		content: 'More awesome content.'
	}, {
		badgeClass: 'warning',
        side: 'left',
		badgeIconClass: 'glyphicon-credit-card',
		title: 'Second heading',
		when: '12 hours ago via Twitter',
		content: 'More awesome content.'
	}, {
		badgeClass: 'warning',
        side: 'left',
		badgeIconClass: 'glyphicon-credit-card',
		title: 'Second heading',
		when: '12 hours ago via Twitter',
		content: 'More awesome content.'
	}];

	$scope.addEvent = function() {
		$scope.events.push({
			badgeClass: 'info',
			badgeIconClass: 'glyphicon-check',
			title: 'First heading',
			when: '3 hours ago via Twitter',
			content: 'Some awesome content.'
		});

	};
	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('animated fadeInUp');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('animated fadeInUp');
	};

	$scope.leftAlign = function() {
		$scope.side = 'left';
	}

	$scope.rightAlign = function() {
		$scope.side = 'right';
	}

	$scope.defaultAlign = function() {
		$scope.side = ''; // or 'alternate'
	}

}
