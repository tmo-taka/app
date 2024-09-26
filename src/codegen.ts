import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: `https://${process.env.REACT_APP_HYGRAPH_REGION}.cdn.hygraph.com/content/${process.env.REACT_APP_HYGRAPH_ID}/master`,
    documents: ['**/*.tsx'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/gql/': {
            preset: 'client'
        }
    }
}

export default config