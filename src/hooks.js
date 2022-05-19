export const handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.append(
    "set-cookie",
    'testCookie={"key1":"value1,"key2":"value=2","key3":"value3"}; Path=/; HttpOnly; SameSite=Lax'
  );

  return response;
};
