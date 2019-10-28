import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PageHelmet from '../components/PageHelmet';

interface Props {
	content: any;
	contentComponent: any;
	description: string;
	title: string;
	tags: string[];
}

export const BlogPostTemplate: React.SFC<Props> = ({
	content,
	contentComponent,
	description,
	tags,
	title
}) => {
	const PostContent = contentComponent || Content;

	return (
		<Container>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<PostContent content={content} />
		</Container>
	);
};

const Container = styled.article`
	margin-bottom: 20px;
`;

const Title = styled.h1`
	word-break: keep-all;
	overflow-wrap: break-word;
`;

const Description = styled.div`
	word-break: keep-all;
	overflow-wrap: break-word;
	margin-top: 1em;
`;

interface Post {
	id: string;
	html: string;
	fields: {
		slug: string;
	};
	frontmatter: {
		[key: string]: any;
	};
}

const BlogPost: React.SFC<{
	data: { markdownRemark: Post; previous: Post | null; next: Post | null };
}> = ({ data }) => {
	const { markdownRemark: post, previous, next } = data;
	const url = `https://leedi.me${post.fields.slug}`;

  	return (
		<Layout>
			<PageHelmet
				title={post.frontmatter.title}
				description={post.frontmatter.description}
				url={url}
			/>
			<BlogPostTemplate
				content={post.html}
				contentComponent={StyledHTMLContent}
				description={post.frontmatter.description}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
			<AdjacentArticles>
				{[previous, next].map((adjacentArticle, i) => adjacentArticle != null ? (
					<AdjacentArticle
						key={adjacentArticle.fields.slug}
						to={adjacentArticle.fields.slug}
					>
						<AdjacentArticleLabel>
							{i === 0 ? "이전 글" : "다음 글"}
						</AdjacentArticleLabel>
						<AdjacentArticleTitle>
							{adjacentArticle.frontmatter.title}
						</AdjacentArticleTitle>
					</AdjacentArticle>
				) : null)}
			</AdjacentArticles>
		</Layout>
  	);
};

export default BlogPost;

export const pageQuery = graphql`
  	query BlogPostByID(
		$id: String!
		$previousId: String
		$hasPrevious: Boolean!
		$nextId: String
		$hasNext: Boolean!
	) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			fields {
				slug
			}
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
			}
		}

		previous: markdownRemark(id: { eq: $previousId }) @include(if: $hasPrevious) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}

		next: markdownRemark(id: { eq: $nextId }) @include(if: $hasNext) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
  	}
`;

const AdjacentArticles = styled.div`
	display: flex;
	margin-bottom: 40px;

	@media screen and (max-width: 800px) {
		flex-wrap: wrap;
	}
`;

const AdjacentArticle = styled(GatsbyLink)`
	flex: 1 1 50%;

	display: flex;
	flex-direction: column;
	padding: 12px;
	border-radius: 6px;
	border: 1px solid #eaebec;

	text-decoration: none;

	&:first-child {
		margin-right: 8px;
	}

	&:last-child {
		margin-left: 8px;
		text-align: right;
	}

	&:first-child:last-child {
		margin: 0;
	}

	@media screen and (max-width: 800px) {
		flex-basis: 100%;
		margin: 6px 0;
	}
`;

const AdjacentArticleLabel = styled.div`
	font-size: 0.825em;
	margin-bottom: 8px;
`;

const AdjacentArticleTitle = styled.strong``;

const StyledHTMLContent = styled(HTMLContent)`
	margin-top: 2em;

	p,
	li {
		word-break: keep-all;
		overflow-wrap: break-word;
		line-height: 1.8;
	}

	svg:not(:root) {
		overflow: hidden;
	}

	p {
		margin-top: 0;
		margin-bottom: 10px;
	}

	> *:first-child {
		margin-top: 0 !important;
	}

	> *:last-child {
		margin-bottom: 0 !important;
	}

	p,
	ul,
	ol,
	dl {
		margin-top: 0;
		margin-bottom: 16px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 24px;
		margin-bottom: 16px;
		line-height: 1.25;
		word-break: keep-all;
		overflow-wrap: break-word;
	}

	h1 {
		padding-bottom: 0.3em;
		font-size: 2em;
	}

	h2 {
		padding-bottom: 0.3em;
		font-size: 1.5em;
	}

	h3 {
		font-size: 1.25em;
	}

	h4 {
		font-size: 1em;
	}

	h5 {
		font-size: 0.875em;
	}

	h6 {
		font-size: 0.85em;
	}

	ul,
	ol {
		padding-left: 2em;
	}

	li + li {
		margin-top: 0.25em;
	}

	dl {
		padding: 0;
	}

	dl dt {
		padding: 0;
		margin-top: 16px;
		font-size: 1em;
		font-style: italic;
		font-weight: 600;
	}

	dl dd {
		padding: 0 16px;
		margin-bottom: 16px;
	}

	img {
		display: block;
		margin: 0 auto;
		border-style: none;
		max-width: 100%;
		height: auto;
		box-sizing: content-box;
		background-color: #fff;
	}

	article,
	nav,
	section {
		h1 {
			font-size: 2em;
		}
	}

	h2 {
		margin-bottom: 1rem;
	}

	ul {
		padding-left: 18px;

		li {
			list-style-type: none;
			position: relative;
			&:before {
				position: absolute;
				content: "\\BB";
				left: -18px;
				top: 0;
			}
		}
	}
`;