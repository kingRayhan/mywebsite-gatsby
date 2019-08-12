module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    let { data } = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            path: edge.node.fields.slug,
            component: `${__dirname}/src/templates/singleBlog.js`,
            context: {
                slug: edge.node.fields.slug,
            },
        })
    })
}

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    /**
     * Add slug field to article node
     */
    if (node.internal.type === 'MarkdownRemark') {
        let arr = node.fileAbsolutePath.split('/')
        let articleDirName = arr[arr.length - 2]
        let articleSlug = articleDirName
            .split(' ')
            .map(word => word.toLowerCase())
            .join('-')
        let slug = `/articles/${articleSlug}`

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}
