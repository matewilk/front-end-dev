'use strict';
export function mainController($scope, $mdSidenav, $log, $timeout, $mdBottomSheet, $document)
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
		badgeClass: 'warning',
        side: 'Right',
		badgeIconClass: 'place',
		title: 'Senior Web Developer',
        company: 'BBC',
		when: '2016 - present',
		content: [
            'Figure out something goooooood!'
        ],
        tools: 'Latest toooools!!',
        toolsIcon: 'developer_mode'
	},{
		badgeClass: 'warning',
        side: 'Left',
		badgeIconClass: 'place',
		title: 'Courses',
        company: 'BBC',
		when: '2014 - 2016',
		content: [
            'Code Reviews',
            'Continuous Integration',
            'Pair Programming',
            'Behavioral Driven Development',
            'Test Driven Development',
            'HTML5 for Mobile and Web',
            'Microservices'
        ],
        tools: 'Latest toooools!!',
        toolsIcon: 'laptop_mac'
	},{
		badgeClass: 'warning',
        side: 'Right',
		badgeIconClass: 'place',
		title: 'Independent Coursework and Conferences',
		when: '2014 - 2015',
		content: [
            'AWS:reInvent 2015 conference Las Vegas',
            'MongoDB for Node.js Developers',
            'Node.js meet-ups',
            'React.js meet-ups',
            'Backbone.js meet-ups',
            'Meet.js meet-ups',
            'Front-Trends 2013 & 2014 conference'
        ],
        tools: 'Latest toooools!!',
        toolsIcon: 'videogame_asset'
	},{
		badgeClass: 'warning',
        side: 'Left',
		badgeIconClass: 'place',
		title: 'Web Developer',
        company: 'BBC',
		when: '2014 - 2015',
		content: [
            'Figure out something goooooood!'
        ],
        tools: 'Latest toooools!!',
        toolsIcon: 'keyboard'
	},{
		badgeClass: 'info',
        side: 'Right',
		badgeIconClass: 'assignment_ind',
		title: 'Software Developer',
        company: 'Arbor Education',
		when: '2013 - 2014',
		content: [
            'Student benchmarking, analytics, and Management Information Systems for schools development',
            'GUI implementation',
            'Responsive components development'
        ],
        tools: 'Javascript, ExtJs, PHP, Zend Framework',
        toolsIcon: 'mouse'
	},{
		badgeClass: 'warning',
        side: 'Left',
		badgeIconClass: 'place',
		title: 'Web/Javascript Developer',
        company: 'Focus Telecom',
		when: '2010 - 2013',
		content: [
            'Development, modifications and new functionality implementation in Javascript based CRM',
            'Call center system development',
            'Front-end components implementation',
            'User interface desing & usability design',
            'Data visualization',
            'GUI implementation',
            'Application architecture implementation',
            'Back-end and SQL development',
            'Full responsibility over one of the main company\'s products'
        ],
        tools: 'Javascript, ExtJs, jQuery, css, html, PHP, Zend Framework, DbDesigner, PostgreSQL',
        toolsIcon: 'developer_mode'
	},{
		badgeClass: 'info',
        side: 'Right',
		badgeIconClass: 'assignment_ind',
		title: 'Programmer Javascript/PHP/SQL',
        company: 'Expanse',
		when: '2009 - 2010',
		content: [
            'Vehicle monitoring, controll and localization application development',
            'GUI implementation',
            'Application architecture implementation',
            'Database design assistance',
            'Writing SQL queries and procedures'
        ],
        tools: 'Javascript, ExtJs, Ajax, PHP, Zend Framework, DbDesigner, PostgreSQL',
        toolsIcon: 'keyboard'
	}, {
		badgeClass: 'warning',
        side: 'Left',
		badgeIconClass: 'place',
		title: 'Freelancer Web enthusiast',
		when: '2008 - 2009',
		content: [
            'Web services functionality development and modification',
            'Templates and forms creation',
            'Scripting',
            'Web pages development',
            'Web shops modification'
        ],
        tools: 'PHP, HTML, CSS, JavaScript',
        toolsIcon: 'videogame_asset'
	}, {
		badgeClass: 'warning',
        side: 'Right',
		badgeIconClass: 'school',
		title: 'Master of Science',
		when: '2009',
		content: ['Mail client with artifical inteligence adaptive anti spam filtering algorithm'],
        tools: 'Javascript, PHP, SQL',
        toolsIcon: 'memory'
	}, {
		badgeClass: 'info',
        side: 'Left',
		badgeIconClass: 'star',
		title: 'IT intern',
        company: 'Inoxpa Spain',
		when: '2007 - 2008',
		content: [
            'Share Point Services 3.0 implementation and server administration',
            'Users intervies and UML diagrams development',
            'System requirements analysis'
        ],
        tools: 'Visual Studio .NET, Microsoft Windows Server 2005, Miscrosoft Web Developer',
        toolsIcon: 'developer_board'
	}, {
		badgeClass: 'info',
        side: 'Right',
		badgeIconClass: 'public',
		title: 'IAESTE Scholarship program',
        company: 'Universitat de Girona',
		when: '2007 - 2008',
		content: ['Faculty of Information and Computer Science']
	}, {
		badgeClass: 'warning',
        side: 'Left',
		badgeIconClass: 'school',
		title: 'Techical University of Lodz',
		when: '2003 - 2009',
		content: [
            'Faculty of Electrical, Electronic, Computer and Control Engineering.',
            'Member of Microprocessor Autonomous Systems Academic Club - MIPSA.'
        ]
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
