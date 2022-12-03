import { loadAccount, windowObj } from './initialize.service';

export const getMembers = async () => {
  const memberRoleContract = windowObj.memberRoleContract;

  const membersCount = await memberRoleContract.methods.membersCount().call();
  const members = [];
  const membersWithRole = [];
  for (let i = 0; i < membersCount; i++) {
    const member = await memberRoleContract.methods.addresses(i).call();
    members.push(member);
  }
  for (let i = 0; i < members.length; i++) {
    const memberAddress = members[i];
    const role = await memberRoleContract.methods
      .userRole(memberAddress)
      .call();
    const memberStruct = {
      address: memberAddress,
      activation_time: role.activationTime,
      role: role.roleType,
      active: role.isActive,
    };
    membersWithRole.push(memberStruct);
  }

  return membersWithRole;
};

export const addMember = async (address: string, role: number) => {
  const memberRoleContract = windowObj.memberRoleContract;

  const accountAddress = await loadAccount();
  await memberRoleContract.methods
    .addRole(address, role)
    .send({ from: accountAddress, to: address, gas: 1000000 });
};

export const toggleRoleStatus = async (address: string, value: boolean) => {
  const memberRoleContract = windowObj.memberRoleContract;

  const accountAddress = await loadAccount();
  await memberRoleContract.methods
    .changeRoleStatus(address, value)
    .send({ from: accountAddress, to: address, gas: 1000000 });
};

export const getRoles = async () => {
  const memberRoleContract = windowObj.memberRoleContract;

  const roleCount = await memberRoleContract.methods.roleTypesCount().call();

  let roles = [];
  for (let i = 0; i < roleCount; i++) {
    let role = await memberRoleContract.methods.roleTypes(i).call();
    roles.push(role);
  }
  return roles;
};

export const addRole = async (value: string) => {
  const memberRoleContract = windowObj.memberRoleContract;

  const accountAddress = await loadAccount();
  await memberRoleContract.methods
    .addRoleType(value)
    .send({ from: accountAddress, gas: 1000000 });
};
