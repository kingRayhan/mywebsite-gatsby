import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const StyledArticleCard = styled.article`
    margin-bottom: 45px;
    .thumbnail {
        border-radius: 5px;
        overflow: hidden;
    }
    .content {
        padding-top: 25px;
        padding-left: 85px;
        padding-right: 85px;
    }
    .title {
        font-family: 'Playfair Display', serif;
    }
    .excerpt {
        font-size: 16px;
        line-height: 25px;
    }
    .tags {
        margin-top: 15px;
        span {
            margin-right: 15px;
        }
    }
`

const ArticleCard = ({ frontmatter: { title, tags, thumbnail }, excerpt, fields }) => {
    let tagsArray = tags.split(',').map(tag => tag.trim())

    return (
        <StyledArticleCard>
            {thumbnail && (
                <div className="thumbnail">
                    <img src={thumbnail.publicURL} alt={title} />
                </div>
            )}

            <div className="content">
                <div className="meta">
                    <h2 className="title">
                        <Link to={fields.slug}>{title}</Link>
                    </h2>
                    <p className="date">15-74</p>
                </div>
                <div className="excerpt">{excerpt}</div>
                <div className="tags">
                    {tagsArray.map(tag => (
                        <span key={tag}>#{tag}</span>
                    ))}
                </div>
            </div>
        </StyledArticleCard>
    )
}

export default ArticleCard
