export interface UserGoalsResponse{
    targetValue: number;
    currentValue: number;
    startDate: Date,
    endDate: Date,
    goalStatus: string,
    habitName: string,
    habitTypeName: string,
    frequency: string,
}