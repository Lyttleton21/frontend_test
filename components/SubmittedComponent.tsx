import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function SubmittedComponent() {
  return (
    <Dialog>
      <DialogTrigger className="bg-[#FFFFFF] p-2  rounded-3xl">
        Submited
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Terraform
            <div className="bg-[#FFF3E5] rounded-3xl  text-[#EE7E00] text-center w-[110px] p-1">
              <p>pending</p>
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="p-4">
              <Label>Submission Link</Label>
              <Input value={"http://example-fakewebsite.com"} />
            </div>
            <div className="p-4">
              <Label>No File</Label>
              <Input />
            </div>
            <div className="p-4">
              <Label>Your Comment</Label>
              <Input
                value={
                  "In this course, I found it difficult to complete the project because I didn't understand this module well enough"
                }
              />
            </div>
            <div className="p-4">
              <Label>Mentor Comment</Label>
              <Input
                value={
                  "In this course, I found it difficult to complete the project because I didn't understand this module well enough"
                }
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
