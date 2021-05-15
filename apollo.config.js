module.exports = {
  client: {
    addTypename: true,
    excludes: ['**/generated/**'],
    includes: ['**/gql/**'],
    service: {
      localSchemaFile: './schema/schema.gql',
    },
  },
};
