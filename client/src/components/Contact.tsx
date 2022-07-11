import {
  Text,
  Input,
  Textarea,
  Button,
  Grid,
  Card,
  Row,
} from '@nextui-org/react';
import {createStyles} from '@mantine/core'
// import { ContactIconsList } from '../ContactIcons/ContactIcons';
import bg from './bg.svg';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      // backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 280px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export function Contact() {
  const { classes } = useStyles();

  return (
    <Card>
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text>
            Contact information
          </Text>

          {/* <ContactIconsList variant="white" /> */}
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Row>
          <Text size="lg">
            Get in touch
          </Text>

          <div className={classes.fields}>
              
            <Grid>
              <Input label="Your name" placeholder="Your name" />
              <Input label="Your email" placeholder="hello@mantine.dev" required />
            </Grid>

            <Input label="Subject" placeholder="Subject" required />

            <Textarea
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Grid>
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Grid>
          </div>
            </Row>
        </form>
      </div>
    </Card>
  );
}