import { Bucket } from "aws-cdk-lib/aws-s3";
import { StackContext, Table } from "sst/constructs";


export function StorageStack({ stack }: StackContext) {
    // Create the DynamoDB table
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string"
        },
        primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
    });

    const bucket = new Bucket(stack, "Uploads")

    return {
        bucket,
        table
    };
}

