import { Button } from '@mui/material';
import {Animate } from '../hooks/useAnimation';
export const AnimationExample = () => {
    return (
        <Animate
            animation="popBounce"
            trigger="onClick"
            duration={800}
        >
            <Button variant="contained">
                Click me!
            </Button>
        </Animate>
    );
}