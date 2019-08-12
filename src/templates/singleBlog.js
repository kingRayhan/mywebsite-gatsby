import React from 'react'
import { graphql } from 'gatsby'
import VMenu from '../components/VMenu'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                tags
                thumbnail {
                    publicURL
                }
            }
            html
        }
    }
`

const SinglePost = props => {
    let post = props.data.markdownRemark
    return (
        <div className=" py-5">
            <Head title={`${post.frontmatter.title} | Fullstack web developer`} />
            <VMenu />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1>{post.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SinglePost
