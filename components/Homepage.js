import React from 'react';
import { _, Message } from '../../react-translations/built.js';

const Homepage = (props, { locale }) => {
  function onLocaleSwitch() {
    window.location.href = locale === 'en-US' ? '/fr/demo' : '/en-US/demo';
  }

  return (
    <div>
      {/* Singular form */}
      <Message className="large" id="react-translations Demo" />
      {/* Singular form with context */}
      <Message id="Hello World!" context="Homepage" />
      {/* Plural form */}
      <Message
        id="You have one cat!"
        idPlural="You have {numCats} cats!"
        count={1}
        numCats="1" />
      {/* Plural form with context */}
      <Message
        id="You have {numCats} car!"
        idPlural="You have {numCats} cars!"
        numCats="1,000"
        count={1000}
        context="Homepage"
        comment="Here's a comment for the translator" />
      {/* Short form */}
      <Message i18n={_('Hey {name}!')} name="Bob" />

      <button
        onClick={onLocaleSwitch}
        id="locale-button">
        {locale === 'en-US' ? '→ fr' : '→ en-US'}
      </button>
    </div>
  );
};

Homepage.contextTypes = {
  locale: React.PropTypes.string.isRequired,
};

export default Homepage;
