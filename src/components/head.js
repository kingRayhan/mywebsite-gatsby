import React from 'react'
import { Helmet } from 'react-helmet'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = props => (
    <Helmet>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>
        <meta name="description" content={props.description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || ''} />
        <meta property="og:description" content={props.description || defaultDescription} />
        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </Helmet>
)

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string,
}

export default Head
