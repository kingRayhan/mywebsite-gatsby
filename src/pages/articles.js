import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import VMenu from '../components/VMenu'
import Head from '../components/head'
import ArticleCard from '../components/ArticleCard'

const Articles = () => {
    let res = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
                nodes {
                    id
                    frontmatter {
                        title
                        tags
                        thumbnail {
                            publicURL
                        }
                    }
                    excerpt
                    timeToRead
                    wordCount {
                        words
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `)

    let nodes = res.allMarkdownRemark.nodes

    return (
        <div className="home-page py-5">
            <Head title="My Writings | King Rayhan" />
            <VMenu />
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        {nodes.map(node => (
                            <ArticleCard key={node.id} {...node} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
