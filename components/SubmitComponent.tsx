import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import UploadImageComponent from "@/components/uploadImage";
import SubmittedComponent from "./SubmittedComponent";

export default function SubmitComponent() {
  return (
    <Dialog>
      <DialogTrigger className="bg-[#F8F9FF] p-2  rounded-3xl">
        Submit
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
              <Label htmlFor="email">Submission Link</Label>
              <Input placeholder="Input text" />
            </div>
            <div className="p-4">
              <Label htmlFor="email">File</Label>
              <UploadImageComponent />
            </div>
            <div>
              <Label htmlFor="email">Add Comment</Label>
              <Textarea rows={5} />
            </div>
            <Button className="bg-[#33CC99] w-full mt-2">Submit</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
