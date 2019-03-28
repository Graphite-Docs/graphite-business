import { UserGroup } from 'radiks';
export async function createTeam(name) {
    const group = new UserGroup({ name });
    await group.create();       
}