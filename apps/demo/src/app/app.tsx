import { Button, Card, CardContent } from '@my-org/ui';

export function App() {
  return (
    <div className="p-4 gap-2 inline-flex flex-col">
      <h1 className="text-2xl">Hi</h1>

      <Button>Click Me</Button>

      <Card className="bg-primary">
        <CardContent>
          <h2 className="text-lg font-bold">Card Title</h2>
          <p className="text-sm">
            This is a description of the card with some additional information.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
