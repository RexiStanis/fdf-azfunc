import { app, HttpRequest, HttpResponse, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function postData(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(await request.text());
    return { status: 200 };
};

app.http('postData', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: postData
});
