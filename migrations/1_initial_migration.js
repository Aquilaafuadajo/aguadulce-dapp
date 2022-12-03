// eslint-disable-next-line no-undef
const MemberRole = artifacts.require('MemberRole');

module.exports = function (deployer) {
  deployer.deploy(MemberRole);
};
