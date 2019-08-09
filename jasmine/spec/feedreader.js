/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        function isDef(arg) {
          expect(arg).toBeDefined();
          expect(arg.length).not.toBe(0);
        }
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            isDef(allFeeds);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have URLs defined', function() {
           allFeeds.forEach(function(e) {
             let arg = e.url;
             isDef(arg);
           });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have names defined', function() {
           allFeeds.forEach(function(e) {
             let arg = e.name;
             isDef(arg);
           });
         });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
          expect(document.body.classList).toEqual(jasmine.stringMatching("menu-hidden"));
         });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
		it('changes visibility when icon is clicked', function() {
			document.body.classList.toggle('menu-hidden');
			expect(document.body.classList).toEqual(jasmine.stringMatching(""));
			document.body.classList.toggle('menu-hidden');
			expect(document.body.classList).toEqual(jasmine.stringMatching("menu-hidden"));
		});

    });




    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    	beforeEach(function(done) {
    		setTimeout(function() {
          loadFeed(item.data('id'));
    			done();
    		}, 100);

    	});

    	it('exist after page load', function(done) {
/*			fail('ooops')}); */

    			expect(result).toBeDefined();
    			done();

    	});

/*    	beforeEach(async function() {
    		await loadFeed(0);
    	});
         it('exist after page load', async function() {
         	const result = await loadFeed(0);
         	let parent = document.getElementsByClassName('feed');
         	let children = parent.childNodes;
         	console.log(parent);
         	console.log('hello');
         	fail('testing only');
         }); */
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */


}());
