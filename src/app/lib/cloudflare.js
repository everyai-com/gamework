export async function createTask(task) {
    // In a real app, you'd send this to your Cloudflare Worker
    console.log('Creating task:', task);
  }
  
  export async function getTasks() {
    // In a real app, you'd fetch this from your Cloudflare Worker
    return [{ id: 1, title: 'Sample Task' }];
  }
  
  export async function getXP() {
    // In a real app, you'd fetch this from your Cloudflare Worker
    return 100;
  }