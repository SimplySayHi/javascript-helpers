
import isValidEmail from './isValidEmail';

// TESTS FROM: https://flaviocopes.com/how-to-validate-email-address-javascript/

const validEmails = [
  'something@something.com',
  'something@something.name',
  'something@something.name.com',
  'something@some-thing.startups',
  'someone@localhost.localdomain',
  'a/b@domain.com',
  '{}@domain.com',
  "m*'!%@something.sa",
  'mason@日本.com',
  'wildwezyr@fahrvergnügen.net',
  'tu!!7n7.ad##0!!!@company.ca',
  'someone@somewhere.com.',
  '%@com.com',
  "!#$%&'*+/=?^_`{|}~.-@com.com",
  'someone@do-ma-in.com',
  '\"testblah\"@example.com',
  'a@b.b',
  'simple@example.com',
  'very.common@example.com',
  'disposable.style.email.with+symbol@example.com',
  'other.email-with-dash@example.com',
  'fully-qualified-domain@example.com',
  'user.name+tag+sorting@example.com',
  'x@example.com',
  '"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com',
  'example-indeed@strange-example.com',
  'admin@mailserver1',
  '#!$%&\'*+-/=?^_`{}|~@example.org',
  '"()<>[]:,;@\\\"!#$%&\'-/=?^_`{}| ~.a"@example.org',
  'example@s.solutions',
  'user@localserver',
  'user@[2001:DB8::1]',
  '" "@example.org',
  'あいうえお@a.long.domain.example.university',
  'one."more\ long"@example.website.place',
  'customer/department@example.com'
];

const invalidEmails = [
  'somebody@example',
  'somebody.example',
  '.wooly@example.com',
  'wo..oly@example.com',
  ' a@p.com',
  'a@p.com ',
  'test()@somebody.example',
  'test..x@somebody.example',
  'test..@somebody.example',
  'someone@127.0.0.1',
  'invalid:email@example.com',
  '@somewhere.com',
  'example.com',
  '@@example.com',
  'a space@example.com',
  'something@ex..ample.com',
  'a\b@c',
  '\"\"test\blah\"\"@example.com',
  'someone@somewhere.com@',
  'someone@somewhere.com@somewhere.com',
  'someone@somewhere_com',
  'someone@some:where.com',
  '.',
  'F/s/f/a@feo+re.com',
  'some+long+email+address@some+host-weird-/looking.com',
  'a @p.com',
  'ddjk-s-jk@asl-.com',
  'someone@do-.com',
  'somebody@-p.com',
  'somebody@-.com',
  'Abc.example.com',
  'A@b@c@example.com',
  'a"b(c)d,e:f;g<h>i[j\k]l@example.com',
  'just"not"right@example.com ',
  'this is"not\allowed@example.com',
  'this\ still\"not\\allowed@example.com',
  '1234567890123456789012345678901234567890123456789012345678901234+x@example.com',
  'john..doe@example.com ',
  'john.doe@example..com '
];

const validEmailsCommon = [
    'something@something.com',
    'something@something.name',
    'something@something.name.com',
    'something@some-thing.startups',
    'someone@localhost.localdomain',
    'someone@do-ma-in.com',
    'simple@example.com',
    'very.common@example.com',
    'other.email-with-dash@example.com',
    'fully-qualified-domain@example.com',
    'x@example.com',
    'example-indeed@strange-example.com',
    'example@s.solutions',
];

const invalidEmailsCommon = [
    'somebody@example',
    'somebody.example',
    '.wooly@example.com',
    'wo..oly@example.com',
    ' a@p.com',
    'a@p.com ',
    'test()@somebody.example',
    'test..x@somebody.example',
    'test..@somebody.example',
    'someone@127.0.0.1',
    'invalid:email@example.com',
    '@somewhere.com',
    'example.com',
    '@@example.com',
    'a space@example.com',
    'something@ex..ample.com',
    'a\b@c',
    '\"\"test\blah\"\"@example.com',
    'someone@somewhere.com@',
    'someone@somewhere.com@somewhere.com',
    'someone@somewhere_com',
    'someone@some:where.com',
    '.',
    'F/s/f/a@feo+re.com',
    'some+long+email+address@some+host-weird-/looking.com',
    'a @p.com',
    'ddjk-s-jk@asl-.com',
    'someone@do-.com',
    'somebody@-p.com',
    'somebody@-.com',
    'Abc.example.com',
    'A@b@c@example.com',
    'a"b(c)d,e:f;g<h>i[j\k]l@example.com',
    'just"not"right@example.com ',
    'this is"not\allowed@example.com',
    'this\ still\"not\\allowed@example.com',
    '1234567890123456789012345678901234567890123456789012345678901234+x@example.com',
    'john..doe@example.com ',
    'john.doe@example..com '
];

describe( 'Is Valid Email', () => {

    /* TEST FOR checkRfc5322 = true */
    for (const email of validEmails) {
        test( `Email passed as "${email}"`, () => {
            const expectTest = isValidEmail( email, true );
            const expectedResult = true;
            expect( expectTest ).toBe( expectedResult );
        } );
    }
    for (const email of invalidEmails) {
        test( `Email passed as "${email}"`, () => {
            const expectTest = isValidEmail( email, true );
            const expectedResult = false;
            expect( expectTest ).toBe( expectedResult );
        } );
    }

    /* TEST FOR checkRfc5322 = false */
    for (const email of validEmailsCommon) {
        test( `Email passed as "${email}" with 2nd param false`, () => {
            const expectTest = isValidEmail( email );
            const expectedResult = true;
            expect( expectTest ).toBe( expectedResult );
        } );
    }
    for (const email of invalidEmailsCommon) {
        test( `Email passed as "${email}" with 2nd param false`, () => {
            const expectTest = isValidEmail( email );
            const expectedResult = false;
            expect( expectTest ).toBe( expectedResult );
        } );
    }

    test( 'Email not passed', () => {
        const expectTest = isValidEmail();
        const expectedResult = false;
        expect( expectTest ).toBe( expectedResult );
    } );

} );
