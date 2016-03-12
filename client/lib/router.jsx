FlowRouter.route('/kartta', {
    action: function() {
    	ReactLayout.render(Container, {
      		content: <MapComponent/>
    	});
  	}
});

FlowRouter.route('/', {
    action: function() {
        ReactLayout.render(Container, {
        	content: <IntroComponent/>
    	});
    }
});

FlowRouter.route('/aikataulu', {
    action: function() {
        ReactLayout.render(Container, {
        	content: <ScheduleComponent/>
    	});
    }
});

// FlowRouter.route('/blog/:postId', {
//     action: function(params, queryParams) {
//         console.log("Yeah! We are on the post:", params.postId);
//     }
// });