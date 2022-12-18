export function getRPCErrorMessage(err: any) {
  if (err.code === 4001) {
    return 'Client denied access';
  }
  if (err.code === -32603) {
    const open = err.message?.indexOf('{');
    const close = err.message?.lastIndexOf('}');
    if (open && close) {
      const j_s = err.message?.substring(open, close + 1);
      if (j_s) {
        const j = JSON.parse(j_s);
        const reason = j.value.data.message.split(': revert ')[1];
        return reason;
      }
    }
  }

  return 'Something went wrong';
}
