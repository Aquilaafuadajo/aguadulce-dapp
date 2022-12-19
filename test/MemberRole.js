/* eslint-disable no-undef */
const MemberRole = artifacts.require('./contracts/MemberRole.sol');

contract('MemberRole', (accounts) => {
  it('add role and increase roleCount', async () => {
    const contract = await MemberRole.deployed();
    await contract.addRoleType('Admin');
    const roleCount = await contract.roleTypesCount();
    assert.equal(roleCount, 1);
  });

  it('add Admin role and assign member to role', async () => {
    const contract = await MemberRole.deployed();
    await contract.addRole('0x3739e8C84fb43DB663DF050c0dFF04c3b6Cec9b6', 0);
    const membersCount = await contract.membersCount();
    assert.equal(membersCount, 1);
  });

  it('toggle member status', async () => {
    const contract = await MemberRole.deployed();
    await contract.changeRoleStatus(
      '0x3739e8C84fb43DB663DF050c0dFF04c3b6Cec9b6',
      false,
    );
    const member = await contract.userRole(
      '0x3739e8C84fb43DB663DF050c0dFF04c3b6Cec9b6',
    );
    assert.equal(member.isActive, false);
  });
});
