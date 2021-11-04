import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  ErrorOutline as ErrorOutlineIcon,
  Flaky as FlakyIcon,
  NextPlanOutlined as NextPlanOutlinedIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
} from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Chip, Pad } from '..';

export const TestSuccessChip: TestBadgeComponent = (props) => {
  const { value } = props;

  return (
    <Tooltip title="Passed Tests" arrow>
      <Chip
        color={value ? 'green' : 'grey'}
        shade={!value ? 300 : undefined}
        label={<Pad number={value} />}
        icon={CheckCircleOutlineIcon}
      />
    </Tooltip>
  );
};

export const TestFailureBadge: TestBadgeComponent = (props) => {
  const { value } = props;

  return (
    <Tooltip title="Failed Tests" arrow>
      <Chip
        color={value ? 'red' : 'grey'}
        shade={!value ? 300 : undefined}
        label={<Pad number={value} />}
        icon={ErrorOutlineIcon}
      />
    </Tooltip>
  );
};

export const TestSkippedBadge: TestBadgeComponent = (props) => {
  const { value } = props;

  return (
    <Tooltip title="Skipped Tests" arrow>
      <Chip
        color={value ? 'orange' : 'grey'}
        shade={!value ? 300 : undefined}
        label={<Pad number={value} />}
        icon={NextPlanOutlinedIcon}
      />
    </Tooltip>
  );
};

export const TestRetriesBadge: TestBadgeComponent = (props) => {
  const { value } = props;

  return (
    <Tooltip title="Flaky Tests" arrow>
      <Chip
        color={value ? 'pink' : 'grey'}
        shade={!value ? 300 : undefined}
        label={<Pad number={value} />}
        icon={FlakyIcon}
      />
    </Tooltip>
  );
};

export const TestOverallBadge: TestBadgeComponent = (props) => {
  const { value } = props;

  return (
    <Tooltip title="Total Tests" arrow>
      <Chip
        color="cyan"
        label={<Pad number={value} />}
        icon={RadioButtonUncheckedIcon}
      />
    </Tooltip>
  );
};

type TestBadgeProps = {
  value: number;
};
type TestBadgeComponent = FunctionComponent<TestBadgeProps>;
