var SDKSettings = require('../../../../test/end-to-end-testapp/settings.js');
var name = require('../../../../src/initialization.js').name;

var config = {
    name: name,
    moduleId: 100, // when published, you will receive a new moduleID
    isDebug: true,
    isSandbox: true,
    settings: SDKSettings,
    userIdentityFilters: [],
    hasDebugString: [],
    isVisible: [],
    eventNameFilters: [],
    eventTypeFilters: [],
    attributeFilters: [],
    screenNameFilters: [],
    pageViewAttributeFilters: [],
    userAttributeFilters: [],
    filteringEventAttributeValue: 'null',
    filteringUserAttributeValue: 'null',
    eventSubscriptionId: 123,
    filteringConsentRuleValues: 'null',
    excludeAnonymousUser: false
};

window.mParticle.config = window.mParticle.config || {};
window.mParticle.config.workspaceToken = 'testkit';
window.mParticle.config.requestConfig = false;
window.mParticle.config.kitConfigs = [config];