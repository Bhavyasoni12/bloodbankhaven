
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const DonationForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodType: '',
    firstTime: false,
    date: undefined as Date | undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBloodTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, bloodType: value }));
  };

  const handleFirstTimeChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, firstTime: checked }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
    setFormData(prev => ({ ...prev, date }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Appointment Scheduled",
        description: "Thank you for scheduling your donation. We'll see you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        bloodType: '',
        firstTime: false,
        date: undefined,
      });
      setDate(undefined);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:ring-2 ring-blood-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:ring-2 ring-blood-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(123) 456-7890"
            value={formData.phone}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:ring-2 ring-blood-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bloodType">Blood Type</Label>
          <Select value={formData.bloodType} onValueChange={handleBloodTypeChange}>
            <SelectTrigger id="bloodType" className="w-full">
              <SelectValue placeholder="Select your blood type" />
            </SelectTrigger>
            <SelectContent>
              {bloodTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="date">Preferred Donation Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                initialFocus
                disabled={(date) => {
                  const today = new Date();
                  return date < today;
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="firstTime" 
            checked={formData.firstTime} 
            onCheckedChange={handleFirstTimeChange} 
          />
          <Label htmlFor="firstTime">This is my first time donating blood</Label>
        </div>
        
        <Button 
          type="submit" 
          disabled={loading}
          className={cn(
            "w-full bg-blood-500 hover:bg-blood-600 text-white",
            "transition-all duration-300 transform hover:-translate-y-0.5",
            "active:translate-y-0 shadow-md hover:shadow-lg"
          )}
        >
          {loading ? "Scheduling..." : "Schedule Donation"}
        </Button>
      </form>
    </div>
  );
};

export default DonationForm;
