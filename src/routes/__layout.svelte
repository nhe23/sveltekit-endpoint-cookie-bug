<script context="module">
  export const load = async ({ fetch }) => {
    const testData = await (await fetch(`/endpoint.json`)).json();

    return {
      props: {
        testData,
      },
    };
  };
</script>

<script>
  export let testData;
</script>

<slot />
<div>{testData.key}</div>
