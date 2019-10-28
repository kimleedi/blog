import * as React from "react";
import Helmet from "react-helmet";

interface Props {
	title: string;
	url: string;
	description?: string;
}

const PageHelmet: React.SFC<Props> = ({
	title,
	url,
	description = "KIMLEEDI"
}) => (
	<Helmet title={title}>
		<meta name="viewport" content="width=device-width,initial-scale=1" />

		<meta name="description" content={description} />

		<meta property="og:locale" content="ko_kR" />
		<meta property="og:site_name" content="ahn.heejong" />
		<meta property="og:title" title={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content="https://leedi.me/assets/opengraph.png" />
		<meta property="og:image:type" content="image/png" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:url" content={url} />

		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:creator" content="KiMLEEDI" />
		<meta name="twitter:site" content="@kimleedi" />
		<meta name="twitter:url" content={url} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content="https://leedi.me/assets/opengraph.png"/>
	</Helmet>
);

export default PageHelmet;