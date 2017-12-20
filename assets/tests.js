'use strict';

define('be-frank/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/test/1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/test/1.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/test/2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/test/2.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/test/3.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/test/3.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/test/4.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/test/4.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/test/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/test/index.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/eq.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/eq.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test/1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test/1.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test/2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test/2.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test/3.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test/3.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test/4.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test/4.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/types.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/types.js should pass ESLint\n\n');
  });

  QUnit.test('routes/you.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/you.js should pass ESLint\n\n');
  });

  QUnit.test('services/score.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/score.js should pass ESLint\n\n14:5 - Unexpected console statement. (no-console)');
  });
});
define('be-frank/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('be-frank/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'be-frank/tests/helpers/start-app', 'be-frank/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('be-frank/tests/helpers/resolver', ['exports', 'be-frank/resolver', 'be-frank/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('be-frank/tests/helpers/start-app', ['exports', 'be-frank/app', 'be-frank/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('be-frank/tests/integration/helpers/eq-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('eq', 'helper:eq', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "1SYOrDlN",
      "block": "{\"statements\":[[1,[33,[\"eq\"],[[28,[\"inputValue\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('be-frank/tests/test-helper', ['be-frank/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('be-frank/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/eq-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/eq-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/test/1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/test/1-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/test/2-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/test/2-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/test/3-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/test/3-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/test/4-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/test/4-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/test/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/test/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test/1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test/1-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test/2-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test/2-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test/3-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test/3-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test/4-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test/4-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/types-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/types-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/you-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/you-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/score-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/score-test.js should pass ESLint\n\n');
  });
});
define('be-frank/tests/unit/controllers/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('be-frank/tests/unit/controllers/test/1-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:test/1', 'Unit | Controller | test/1', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('be-frank/tests/unit/controllers/test/2-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:test/2', 'Unit | Controller | test/2', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('be-frank/tests/unit/controllers/test/3-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:test/3', 'Unit | Controller | test/3', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('be-frank/tests/unit/controllers/test/4-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:test/4', 'Unit | Controller | test/4', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('be-frank/tests/unit/controllers/test/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:test/index', 'Unit | Controller | test/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('be-frank/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/test-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test', 'Unit | Route | test', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/test/1-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test/1', 'Unit | Route | test/1', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/test/2-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test/2', 'Unit | Route | test/2', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/test/3-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test/3', 'Unit | Route | test/3', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/test/4-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test/4', 'Unit | Route | test/4', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/test/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test/index', 'Unit | Route | test/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/types-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:types', 'Unit | Route | types', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/routes/you-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:you', 'Unit | Route | you', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('be-frank/tests/unit/services/score-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:score', 'Unit | Service | score', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('be-frank/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
