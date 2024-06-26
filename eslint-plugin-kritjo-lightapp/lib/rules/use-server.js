module.exports = {
  meta: {
    messages: {
      missingUseServer: 'The file must start with "use server";',
    },
    type: "problem",
    schema: [],
  },
  create(context) {
    return {
      Program(node) {
        const lines = context.sourceCode.getText().split("\n");
        // Skip comments at the beginning of the file
        let line = lines.shift();
        while (line.startsWith("//")) {
          line = lines.shift();
        }

        if (line !== '"use server";' && line !== "'use server';") {
          context.report({
            node,
            messageId: "missingUseServer",
          });
        }
      },
    };
  },
};
