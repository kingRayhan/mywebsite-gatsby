import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Masonry from 'react-masonry-component'

const StyledGalleryImage = styled.a`
    width: 400px;
`

const StyledGallery = styled.div`
    margin: auto;
    .masonry {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: auto;
        width: 90%;
    }
`

const InstaGallery = () => {
    let data = useStaticQuery(graphql`
        {
            allInstaNode {
                nodes {
                    id
                    original
                    caption
                }
            }
        }
    `)

    return (
        <div className="pt-5 insta-gallery">
            <div className="pb-5 text-center">
                <a
                    href="https://www.instagram.com/king_rayhan/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="insta-url"
                >
                    <img src="/images/insta-logo.png" alt="Insta Logo" />
                    &nbsp; king_rayhan
                </a>
            </div>
            <StyledGallery>
                <Masonry className="masonry">
                    {data.allInstaNode.nodes.map(node => (
                        <StyledGalleryImage
                            rel="noopener noreferrer"
                            href={`https://www.instagram.com/p/${node.id}`}
                            key={node.id}
                        >
                            <img src={node.original} alt={node.caption} />
                        </StyledGalleryImage>
                    ))}
                </Masonry>
            </StyledGallery>
        </div>
    )
}

export default InstaGallery
