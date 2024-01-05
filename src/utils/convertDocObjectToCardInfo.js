export const convertDocObjectToCard = (docs) => {
  const imgParseRegExp = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/gm;

  const parseXml = (xml) => {
    const imgs = xml.match(imgParseRegExp);
    const htmlText = imgs
      ? imgs.reduce((acc, el) => acc.replace(el, ""), xml)
      : xml;
    return htmlText;
  };

  const parseImageUrl = (xml) => {
    const imgs = xml.match(imgParseRegExp);
    const imagesSources = imgs
      ? imgs
          .map((img) => img.match(/src\s*=\s*"([^"]+)"/))
          .filter((src) => src && src[1])
      : [];
    return imagesSources.length ? imagesSources[0][1] : null;
  };

  const getArtTags = (artType) => {
    const tagsMapping = {
      isTechNews: "технические новости",
      isAnnouncement: "анонсы и события",
      isDigest: "сводки новостей",
    };
    return Object.entries(artType)
      .filter(([key, value]) => value && tagsMapping[key])
      .map(([key]) => tagsMapping[key]);
  };

  return docs.map((doc) => {
    const customDate = new Date(doc.ok.issueDate);
    const formatDate = `${customDate.getDate()}.${customDate.getMonth()}.${customDate.getFullYear()}`;
    return {
      date: formatDate,
      articleUrl: doc.ok.url,
      articleUrlTitle: doc.ok.source.name,
      articleTitle: doc.ok.title.text,
      articleTags: getArtTags(doc.ok.attributes),
      articleContent: parseXml(doc.ok.content.markup),
      imageUrl: parseImageUrl(doc.ok.content.markup),
      wordCount: doc.ok.attributes.wordCount,
    };
  });
};
