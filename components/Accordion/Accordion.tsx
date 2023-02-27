"use client";
import * as React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
    questions: {
        id: number;
        question: string;
        tag: string;
        response: string[];
    }[]
}

export default function ControlledAccordion(props: Props) {
    const { questions } = props;
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            {questions.map(({id, response, question, tag}) => (
                <Accordion expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)} key={`panel${id}`}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${id}bh-content`}
                    id={`panel${id}bh-header`}
                    >
                    <Typography sx={{ width: '25%', flexShrink: 0 }}>
                        {tag}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    {
                     response.map(item => (
                        <Typography key={item}>
                            {`* ${item}`}
                        </Typography>
                     )) }
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}